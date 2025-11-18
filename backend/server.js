// ...existing code...
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({ windowMs: 60 * 1000, max: 30 });
app.use(limiter);

app.post("/send-email", async (req, res) => {
    const { name, email, phone, company, message } = req.body;
    if (!name || !email) return res.status(400).json({ success: false, message: "name e email são obrigatórios" });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return res.status(400).json({ success: false, message: "email inválido" });

    try {
        const port = parseInt(process.env.EMAIL_PORT, 10) || 465;
        const secure = typeof process.env.EMAIL_SECURE !== "undefined"
            ? process.env.EMAIL_SECURE === "true"
            : port === 465;

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port,
            secure,
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
            tls: process.env.NODE_ENV === "development" ? { rejectUnauthorized: false } : undefined,
        });

        await transporter.sendMail({
            from: `"Formulário VaultCloud" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: "📩 Novo contato pelo site",
            html: `
                <h2>Nova mensagem enviada pelo formulário</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${phone || "-"}</p>
                <p><strong>Empresa:</strong> ${company || "-"}</p>
                <p><strong>Mensagem:</strong><br/>${message || "-"}</p>
            `,
        });

        return res.status(200).json({ success: true, message: "Email enviado!" });
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return res.status(500).json({ success: false, message: "Erro ao enviar email" });
    }
});

app.listen(process.env.PORT || 4000, () => console.log("Servidor rodando na porta", process.env.PORT || 4000));
// ...existing code...
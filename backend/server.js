require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ROTA PARA RECEBER FORMULÁRIO
app.post("/send-email", async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulário VaultCloud" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "📩 Novo contato pelo site",
      html: `
        <h2>Nova mensagem enviada pelo formulário</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Email enviado!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Erro ao enviar email" });
  }
});

app.listen(4000, () => console.log("Servidor rodando na porta 4000"));

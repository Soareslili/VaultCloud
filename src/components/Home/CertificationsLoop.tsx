
import aws from "../../assets/aws.png";
import azure from "../../assets/azure.svg";
import iso from "../../assets/iso.svg";
import nist from "../../assets/nist.png";
import lgpd from "../../assets/lgpd.png";
import exin from "../../assets/EXIN.png"
import devops from "../../assets/Devops.png"
import oracle from "../../assets/oracle.png"
import cybersecurity from "../../assets/cybersecurity.png"
import engineer from "../../assets/googleEngineer.png"
import architect from "../../assets/goggleArchitect.png"


export default function CertificationsLoop() {
  const logos = [aws, azure,  iso, nist, lgpd, exin, devops, oracle, cybersecurity, engineer, architect];

  return (
    <section className="py-20 bg-[#f0f3f5] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className=" text-black text-3xl md:text-4xl font-bold mb-16">
          Certificações e Padrões que Fortalecem a Confiança
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll space-x-16">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Certificação"
                className="h-20 w-auto opacity-80 hover:opacity-100 transition-transform hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

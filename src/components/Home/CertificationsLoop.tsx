import React from "react";
import aws from "../../assets/aws.svg";
import azure from "../../assets/azure.svg";
import gcp from "../../assets/gcp.svg";
import iso from "../../assets/iso.svg";
import nist from "../../assets/nist.png";
import lgpd from "../../assets/lgpd.png";

export default function CertificationsLoop() {
  const logos = [aws, azure, gcp, iso, nist, lgpd];

  return (
    <section className="py-20 bg-[#0B1F3A] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Certificações e Padrões que Fortalecem a Confiança
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll space-x-16">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Certificação"
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-transform hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

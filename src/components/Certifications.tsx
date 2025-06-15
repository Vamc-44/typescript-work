// src/components/CertificationsSection.tsx
import React from "react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
  },
  {
    title: "IBM Certified Data Science Professional",
    issuer: "IBM",
  },
  {
    title: "Machine Learning A–Z™: Hands-On Python & R in Data Science",
    issuer: "Udemy",
  },
  {
    title: "Microsoft Certified DP-600 Fabric Analytics Engineer Associate",
    issuer: "Microsoft",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-12">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold text-foreground mb-6">Certifications</h2>
    <ul className="list-disc list-inside space-y-2 text-muted-foreground inline-block text-left">
      {certifications.map((cert, index) => (
        <li key={index}>
          <span className="font-medium text-foreground">{cert.title}</span> —{" "}
          <span className="italic">{cert.issuer}</span>
        </li>
      ))}
    </ul>
  </div>
</section>
  );
};

export default CertificationsSection;

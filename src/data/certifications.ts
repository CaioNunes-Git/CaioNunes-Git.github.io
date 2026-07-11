export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export const certifications: Certification[] = [
  { name: "Certificação Alura - Boas Práticas na construção de API's REST usando Java + SpringBoot", issuer: "Java + SpringBoot", date: "2023", url: "https://cursos.alura.com.br/certificate/341b6bdc-82c7-493d-b631-91cb384bf5ae" },
  { name: "Microsserviços usando Java + Spring", issuer: "Microsserviços", date: "2024", url: "https://cursos.alura.com.br/certificate/90292f1d-6755-40e4-bc42-a28e40e8c77b" },
  { name: "AWS Data Pipeline", issuer: "AWS", date: "2024", url: "https://www.credly.com/badges/b252b198-6c20-4813-b051-d708810a1f39/print" },
];

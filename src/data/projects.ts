export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Enriquecimento de CNPJ a partir da razão social",
    description: "Busca de CNPJ a partir da razão social, utilizando WebSearch para buscar o CNPJ e BrasilAPI para validar o CNPJ encontrado",
    tags: ["Python", "BrasilAPI", "React"],
    githubUrl: "https://github.com/CaioNunes-Git/WebSearchCNPJWithRazaoSocial"
  },
  {
    title: "API de agendamento de consultas",
    description: "API RESTful com SpringBoot, Java e PostgreSQL, incluindo autenticação JWT e testes automatizados.",
    tags: ["Java", "JUnit", "SpringBoot Data & Security"],
    githubUrl: "https://github.com/CaioNunes-Git/VollMed"
  },
  {
    title: "Identificação de sexo baseado em características físicas",
    description: "Identificação de sexo baseado em características físicas, utilizando Machine Learning para classificar o sexo de uma pessoa.",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Yolo", "OpenCV"],
    githubUrl: "https://github.com/CaioNunes-Git/FemaleMale-Identifier"
  },
  {
    title: "Agente de atendimento via Whatsapp",
    description: "Agente de IA humanizado para atendimento via Whatsapp capaz de responder pergunras sobre a clínica e gerir toda a agenda do estabelecimento.",
    tags: ["N8N", "Redis", "Supabase", "OpenAI - GPT-4o-mini"]
  }
];

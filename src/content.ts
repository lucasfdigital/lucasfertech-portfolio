/* Conteúdo do site em dados — edite texto aqui sem tocar em código.
 * Tudo marcado com TODO é placeholder aguardando material real. */

export const LINKS = {
  github: "https://github.com/lucasfdigital",
  linkedin: "https://www.linkedin.com/in/lucasfia/",
  x: "https://x.com/lucasfertech",
  instagram: "https://www.instagram.com/lucasfer.tech/",
  whatsapp: "https://wa.me/5585991344490",
  // TODO: confirmar email real de contato
  email: "mailto:contato@lucasfernandes.dev",
};

export const TICKER = [
  "Marketing", "Growth", "CRM", "Automação", "IA",
  "React", "Next.js", "Node.js", "Python", "Lovable", "Claude", "Power BI",
];

/* Trajetória real — fonte: LinkedIn (out/2026) */
export const JOBS = [
  {
    tile: "ES",
    tileCls: "bg-status-purple-background text-status-purple-text",
    category: "Liderança técnica",
    title: "ESCALE BIZ — Líder de Desenvolvimento",
    desc: "Inteligência técnica & analytics num ecossistema de aceleração de negócios: CI/CD, deploys e processos que sustentam a operação.",
    foot: "jun 2026 — atual · Fortaleza, no local",
    status: { label: "Atual", primary: true },
    stack: ["CI/CD", "Analytics", "Liderança"],
  },
  {
    tile: "AG",
    tileCls: "bg-status-blue-background text-status-blue-text",
    category: "Sales Ops & CRM",
    title: "Agilean — Sales Ops · Automação & CRM",
    desc: "Inteligência comercial: KPIs, forecast unificado entre ferramentas de vendas, gestão e otimização de CRM.",
    foot: "ago 2025 — jun 2026 · Fortaleza, híbrido",
    status: { label: "2025–2026", primary: false },
    stack: ["KPIs", "Forecast", "CRM"],
  },
  {
    tile: "GN",
    tileCls: "bg-status-cyan-background text-status-cyan-text",
    category: "Liderança técnica",
    title: "GN Digital — Líder de Desenvolvimento",
    desc: "Liderança e mentoria de equipe terceirizada e remota, do front ao mobile.",
    foot: "jan 2024 — out 2025 · Remoto",
    status: { label: "2024–2025", primary: false },
    stack: ["React", "Mobile", "Mentoria"],
  },
  {
    tile: "GR",
    tileCls: "bg-status-yellow-background text-status-yellow-text",
    category: "Educação",
    title: "Gracom — Professor de Cinema",
    desc: "Cinema, teoria e efeitos visuais. A base de narrativa que uso até hoje em marketing.",
    foot: "2017 — 2020 · Fortaleza",
    status: { label: "2017–2020", primary: false },
    stack: ["Cinema", "After Effects", "Narrativa"],
  },
];

/* Atuação real — fonte: site anterior (Framer) */
export const SERVICES = [
  {
    icon: "megaphone" as const,
    cardCls: "bg-status-orange-background",
    titleCls: "text-status-orange-text",
    title: "Marketing",
    desc: "Ecossistemas de vendas que atraem público qualificado e transformam atenção em receita real.",
    items: ["Estratégia Digital", "Performance", "Conversão"],
  },
  {
    icon: "chart" as const,
    cardCls: "bg-status-lime-background",
    titleCls: "text-status-lime-text",
    title: "Growth",
    desc: "Alavancas de crescimento via dados e testes rápidos, pra escalar de forma sustentável.",
    items: ["Análise de Dados", "Tráfego Pago", "Escala"],
  },
  {
    icon: "robot" as const,
    cardCls: "bg-status-purple-background",
    titleCls: "text-status-purple-text",
    title: "Automação & IA",
    desc: "Ferramentas conectadas e fluxos inteligentes que eliminam o trabalho manual repetitivo.",
    items: ["Gestão de CRM", "Fluxos Inteligentes", "Integrações", "IA"],
  },
];

/* ---- Portfólio: sites de clientes ---- */
// TODO: trocar os slots abaixo pelos sites reais (nome, url, descrição, stack, status)
export type Client = {
  name: string;
  desc: string;
  stack: string[];
  status: { label: string; primary: boolean };
  url?: string;
  cta?: boolean;
};

export const CLIENTS: Client[] = [
  {
    name: "Seu site aqui",
    desc: "O próximo case entra neste espaço. Site institucional, landing ou e-commerce — do escopo ao ar em semanas.",
    stack: ["Escopo em 24h", "Entrega semanal"],
    status: { label: "Disponível", primary: true },
    url: LINKS.whatsapp,
    cta: true,
  },
  {
    name: "Em breve",
    desc: "Novo case de cliente entrando no ar. Volta em alguns dias.",
    stack: [],
    status: { label: "Em breve", primary: false },
  },
  {
    name: "Em breve",
    desc: "Novo case de cliente entrando no ar. Volta em alguns dias.",
    stack: [],
    status: { label: "Em breve", primary: false },
  },
];

/* ---- Ferramentas que eu compartilho ---- */
// TODO: Lucas vai mandar a lista (nome + link + 1 frase). Entradas abaixo são exemplo de formato.
export type Tool = { name: string; desc: string; url: string; cat: string };

export const TOOLS: Tool[] = [
  {
    name: "Claude",
    desc: "IA que uso pra escrever, revisar e acelerar entrega. Tenho certificação oficial.",
    url: "https://claude.ai",
    cat: "IA",
  },
  {
    name: "Lovable",
    desc: "Construção de apps e MVPs com IA, do prompt ao deploy. Tenho formação na ferramenta.",
    url: "https://lovable.dev",
    cat: "IA",
  },
];

/* ---- Blog ---- */
export type PostBlock = { h?: string; p: string };
export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  blocks: PostBlock[];
};

export const POSTS: Post[] = [
  {
    slug: "atencao-vira-receita",
    title: "Por que atenção vira receita",
    date: "out 2026",
    excerpt: "Curtida não paga boleto. O que transforma audiência em dinheiro é sistema: CRM, automação e follow-up.",
    blocks: [
      {
        p: "Todo negócio hoje tem o mesmo problema: gente olhando e ninguém comprando. Seguidor, view, like — atenção sobrando, receita faltando. Depois de anos entre marketing, vendas e tecnologia, cheguei numa tese simples: atenção só vira receita quando existe sistema entre as duas coisas.",
      },
      {
        h: "Marketing atrai, sistema converte",
        p: "O marketing faz o trabalho dele: traz gente interessada. Mas entre o interesse e o pagamento existe um buraco onde a maioria das oportunidades morre — ninguém respondeu a tempo, ninguém fez follow-up, ninguém organizou os contatos. É aí que entra CRM bem operado e automação: cada conversa registrada, cada lead com próximo passo, nada parado mais de 24h.",
      },
      {
        h: "IA acelera, não substitui",
        p: "Uso IA pra qualificar, resumir conversas e redigir follow-ups em escala. Mas a decisão continua humana: IA tira o trabalho repetitivo da frente pra equipe focar no que fecha negócio — conversa boa, na hora certa, com a oferta certa.",
      },
      {
        h: "O teste dos 7 dias",
        p: "Se você olhar seu funil hoje e tiver oportunidade parada há mais de 7 dias sem próximo passo, você não tem problema de marketing. Tem problema de sistema. E sistema se constrói: processo primeiro, ferramenta depois, automação por último. Nessa ordem.",
      },
      {
        p: "É esse o trabalho que eu faço — e sobre o qual vou escrever aqui: marketing, CRM, automação e IA aplicados a receita real. Se quiser trocar ideia sobre o seu funil, me chama no WhatsApp.",
      },
    ],
  },
];

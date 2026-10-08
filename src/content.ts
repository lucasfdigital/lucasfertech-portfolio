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
// Lista real enviada pelo Lucas (PDF "Lista de Ferramentas de Desenvolvimento").
export type Tool = { name: string; desc: string; url: string; cat: string };

export const TOOLS: Tool[] = [
  {
    name: "GitHub",
    desc: "Guarda o código e ajuda no trabalho em equipe.",
    url: "https://github.com",
    cat: "Código & colaboração",
  },
  {
    name: "PostHog",
    desc: "Mostra como as pessoas navegam e quais botões clicam.",
    url: "https://posthog.com",
    cat: "Análise de uso",
  },
  {
    name: "Cloudflare",
    desc: "Guarda arquivos e imagens sem taxa de transferência.",
    url: "https://www.cloudflare.com",
    cat: "Armazenamento",
  },
  {
    name: "Clerk",
    desc: "Sistema pronto para login, cadastro e gestão de contas.",
    url: "https://clerk.com",
    cat: "Autenticação",
  },
  {
    name: "Kinde",
    desc: "Ótima alternativa ao Clerk, com plano gratuito gigante pra projetos novos.",
    url: "https://kinde.com",
    cat: "Autenticação",
  },
  {
    name: "Neon",
    desc: "Base de dados na nuvem rápida e adaptável.",
    url: "https://neon.tech",
    cat: "Bancos de dados",
  },
  {
    name: "Supabase",
    desc: "Plataforma com base de dados e sistema de login.",
    url: "https://supabase.com",
    cat: "Bancos de dados",
  },
  {
    name: "Turso",
    desc: "Banco de dados ultra rápido e leve, ideal pra projetos modernos.",
    url: "https://turso.tech",
    cat: "Bancos de dados",
  },
  {
    name: "Upstash",
    desc: "Excelente pra funções rápidas (Redis) e filas de mensagens sem custo inicial.",
    url: "https://upstash.com",
    cat: "Bancos de dados",
  },
  {
    name: "Resend",
    desc: "Facilita o envio de emails automáticos.",
    url: "https://resend.com",
    cat: "Comunicação",
  },
  {
    name: "emailcn",
    desc: "Componentes de e-mail para React: Email, MJML React e JSX Email.",
    url: "https://emailcn.run",
    cat: "Comunicação",
  },
  {
    name: "BoardUI",
    desc: "Componentes e modelos prontos para criar painéis de controle.",
    url: "https://www.boardui.com/",
    cat: "Design & interface",
  },
  {
    name: "Shadcn",
    desc: "Disponibiliza blocos visuais prontos para sites.",
    url: "https://ui.shadcn.com",
    cat: "Design & interface",
  },
  {
    name: "Magic UI",
    desc: "Mais de 150 componentes animados gratuitos para React.",
    url: "https://magicui.design",
    cat: "Design & interface",
  },
  {
    name: "Lucide",
    desc: "Uma das melhores e mais completas bibliotecas de ícones de código aberto.",
    url: "https://lucide.dev",
    cat: "Design & interface",
  },
  {
    name: "Impeccable",
    desc: "Oferece ferramentas para criar o visual de sites.",
    url: "https://impeccable.style",
    cat: "Design & interface",
  },
  {
    name: "Interfaces.dev",
    desc: "Inspiração e componentes prontos.",
    url: "https://interfaces.dev/",
    cat: "Design & interface",
  },
  {
    name: "Spotted in Prod",
    desc: "Galeria de elementos visuais usados em apps reais.",
    url: "https://www.spottedinprod.com/",
    cat: "Design & interface",
  },
  {
    name: "Kobra",
    desc: "Sistema de componentes focado em movimento e animações.",
    url: "https://kobra.systems/",
    cat: "Design & interface",
  },
  {
    name: "UI Arc",
    desc: "Componentes e blocos visuais para React com animações.",
    url: "https://uiarc.dev/",
    cat: "Design & interface",
  },
  {
    name: "Kinetics",
    desc: "Biblioteca de microinterações fluidas baseadas em física.",
    url: "https://kinetics.colorion.co/",
    cat: "Design & interface",
  },
  {
    name: "beUI",
    desc: "Componentes de interface animados para React e Next.js.",
    url: "https://beui.dev/",
    cat: "Design & interface",
  },
  {
    name: "Transitions.dev",
    desc: "Transições de UI interativas e prontas para uso.",
    url: "https://transitions.dev/",
    cat: "Design & interface",
  },
  {
    name: "Reverse UI",
    desc: "Componentes de interface premium com foco em animação.",
    url: "https://reverseui.com/",
    cat: "Design & interface",
  },
  {
    name: "Evil Charts",
    desc: "Gráficos animados e interativos com design premium.",
    url: "https://evilcharts.com/",
    cat: "Design & interface",
  },
  {
    name: "Animos",
    desc: "Cria animações fluidas para sites e aplicações.",
    url: "https://animos.app/",
    cat: "Design & interface",
  },
  {
    name: "Doron Supply",
    desc: "Fornece recursos visuais, fontes e elementos.",
    url: "https://www.doronsupply.com/",
    cat: "Design & interface",
  },
  {
    name: "Ditther",
    desc: "Aplica efeitos retro e processamento em imagens.",
    url: "https://ditther.com/",
    cat: "Design & interface",
  },
  {
    name: "ASCII Magic",
    desc: "Transforma imagens e textos em arte ASCII.",
    url: "https://www.ascii-magic.com/",
    cat: "Design & interface",
  },
  {
    name: "termcn",
    desc: "Componentes de interface de terminal para React.",
    url: "https://termcn.dev",
    cat: "Design & interface",
  },
  {
    name: "framecn",
    desc: "Componentes de vídeo personalizáveis para React.",
    url: "https://framecn.dev",
    cat: "Design & interface",
  },
  {
    name: "ogimagecn",
    desc: "Componentes de imagem Open Graph para React.",
    url: "https://ogimagecn.com",
    cat: "Design & interface",
  },
  {
    name: "mcpcn",
    desc: "Componentes de interface de aplicativo MCP para React.",
    url: "https://mcpcn.dev",
    cat: "Design & interface",
  },
  {
    name: "pdfcn",
    desc: "Componentes PDF para React construídos com Takumi e Forme.",
    url: "https://pdfcn.dev",
    cat: "Design & interface",
  },
  {
    name: "editorcn",
    desc: "Componentes de editor de texto rico (Rich Text) construídos em Tiptap.",
    url: "https://rtecn.space",
    cat: "Design & interface",
  },
  {
    name: "shadercn",
    desc: "Componentes de shader para React construídos com vgpu e TypeGPU.",
    url: "https://shadercn.run",
    cat: "Design & interface",
  },
  {
    name: "mdxcn",
    desc: "Componentes amigáveis para markdown em MDX.",
    url: "https://mdxcn.dev",
    cat: "Design & interface",
  },
  {
    name: "Stripe",
    desc: "Processa pagamentos e transações online.",
    url: "https://stripe.com/br",
    cat: "Finanças",
  },
  {
    name: "Pluggy",
    desc: "Conecta aplicações a dados bancários e financeiros.",
    url: "https://www.pluggy.ai",
    cat: "Finanças",
  },
  {
    name: "Tally",
    desc: "Cria formulários de forma simples para coletar dados.",
    url: "https://tally.so",
    cat: "Formulários",
  },
  {
    name: "Sanity",
    desc: "Sistema para gerenciar textos e imagens do site.",
    url: "https://sanity.io",
    cat: "CMS",
  },
  {
    name: "Contentful",
    desc: "Gerenciamento de conteúdo com um plano grátis muito generoso.",
    url: "https://www.contentful.com",
    cat: "CMS",
  },
  {
    name: "Linear",
    desc: "Plataforma para organizar tarefas e acompanhar projetos.",
    url: "https://linear.app",
    cat: "Gestão de projetos",
  },
  {
    name: "Vercel",
    desc: "Plataforma para publicar sites de forma rápida.",
    url: "https://vercel.com",
    cat: "Infra & deploy",
  },
  {
    name: "Netlify",
    desc: "Um dos maiores concorrentes da Vercel, perfeito pra hospedar sites de graça.",
    url: "https://www.netlify.com",
    cat: "Infra & deploy",
  },
  {
    name: "Render",
    desc: "Aloja sites, aplicações e bases de dados.",
    url: "https://render.com",
    cat: "Infra & deploy",
  },
  {
    name: "Terraform",
    desc: "Cria a infraestrutura de servidores usando código.",
    url: "https://developer.hashicorp.com/terraform",
    cat: "Infra & deploy",
  },
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
  {
    name: "OpenCode",
    desc: "Assistente inteligente pra ajudar a programar.",
    url: "https://opencode.ai",
    cat: "IA",
  },
  {
    name: "OpenRouter",
    desc: "Acesso a vários modelos de IA em um só lugar.",
    url: "https://openrouter.ai",
    cat: "IA",
  },
  {
    name: "Mastra",
    desc: "Ferramenta para criar agentes de IA.",
    url: "https://mastra.ai",
    cat: "IA",
  },
  {
    name: "agentcn",
    desc: "Receitas de agentes de IA prontas para produção.",
    url: "https://agentcn.run",
    cat: "IA",
  },
  {
    name: "Langfuse",
    desc: "Monitora o comportamento de aplicações com IA.",
    url: "https://langfuse.com",
    cat: "IA",
  },
  {
    name: "DeepSeek Harness",
    desc: "Avalia e testa modelos de IA.",
    url: "https://www.deepseek.com/en/harness",
    cat: "IA",
  },
  {
    name: "Sentry",
    desc: "Avisa quando algo quebra no site e aponta a falha.",
    url: "https://sentry.io",
    cat: "Monitoramento",
  },
  {
    name: "Algolia",
    desc: "Sistema de busca super rápida para sites.",
    url: "https://algolia.com",
    cat: "Busca",
  },
  {
    name: "Trigger.dev",
    desc: "Executa rotinas pesadas sem travar o site.",
    url: "https://trigger.dev",
    cat: "Tarefas em 2º plano",
  },
  {
    name: "Hoppscotch",
    desc: "Ferramenta gratuita no navegador pra testar suas APIs.",
    url: "https://hoppscotch.io",
    cat: "Testes & automação",
  },
  {
    name: "Playwright",
    desc: "Automatiza testes em navegadores de internet.",
    url: "https://playwright.dev",
    cat: "Testes & automação",
  },
  {
    name: "Ultramock",
    desc: "Cria APIs simuladas (mocks) para testes.",
    url: "https://www.ultramock.io/",
    cat: "Testes & automação",
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

import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiLineChartLine,
  RiMegaphoneLine,
  RiRobotLine,
  RiWhatsappLine,
} from "@remixicon/react";
import { DirectionProvider } from "@/components/foundations/direction/direction";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badge";
import { Chip } from "@/components/base/badges/chip";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/social-button/social-button";
import { cx } from "@/utils/cx";

const DesignSystem = lazy(() => import("./DesignSystem"));

const LINKS = {
  github: "https://github.com/lucasfdigital",
  linkedin: "https://www.linkedin.com/in/lucasfia/",
  x: "https://x.com/lucasfertech",
  instagram: "https://www.instagram.com/lucasfer.tech/",
  whatsapp: "https://wa.me/5585991344490",
  // TODO: confirmar email real de contato
  email: "mailto:contato@lucasfernandes.dev",
};

const TICKER = [
  "Marketing", "Growth", "CRM", "Automação", "IA",
  "React", "Next.js", "Node.js", "Python", "Lovable", "Claude", "Power BI",
];

/* Trajetória real — fonte: LinkedIn (out/2026) */
const JOBS = [
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
const SERVICES = [
  {
    icon: RiMegaphoneLine,
    cardCls: "bg-status-orange-background",
    titleCls: "text-status-orange-text",
    title: "Marketing",
    desc: "Ecossistemas de vendas que atraem público qualificado e transformam atenção em receita real.",
    items: ["Estratégia Digital", "Performance", "Conversão"],
  },
  {
    icon: RiLineChartLine,
    cardCls: "bg-status-lime-background",
    titleCls: "text-status-lime-text",
    title: "Growth",
    desc: "Alavancas de crescimento via dados e testes rápidos, pra escalar de forma sustentável.",
    items: ["Análise de Dados", "Tráfego Pago", "Escala"],
  },
  {
    icon: RiRobotLine,
    cardCls: "bg-status-purple-background",
    titleCls: "text-status-purple-text",
    title: "Automação & IA",
    desc: "Ferramentas conectadas e fluxos inteligentes que eliminam o trabalho manual repetitivo.",
    items: ["Gestão de CRM", "Fluxos Inteligentes", "Integrações", "IA"],
  },
];

/* Certificados recentes — fonte: LinkedIn (21 no total) */
const CERTS = [
  ["AN", "bg-status-blue-background text-status-blue-text", "Anthropic: Claude", "Anthropic · abr 2026"],
  ["LO", "bg-status-rose-background text-status-rose-text", "Formação Lovable", "Viver de IA · abr 2026"],
  ["TA", "bg-status-cyan-background text-status-cyan-text", "Tavily Web Search API", "Tavily · mar 2026"],
  ["GR", "bg-status-lime-background text-status-lime-text", "Growth Marketing Essencial 2.0", "Conversion · nov 2025"],
  ["BI", "bg-status-purple-background text-status-purple-text", "Power BI com IA", "Rocketseat · out 2025"],
  ["IA", "bg-status-orange-background text-status-orange-text", "NLW IA — IA em Programação", "Rocketseat · set 2023"],
];

/** Eyebrow numerado estilo ArtCraft: 01/Rótulo. */
export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="text-caption-1-semibold text-text-tertiary">
      {index}/{label}
    </p>
  );
}

/** Entrada padrão BoardUI: fade + scale + blur, uma vez, com reduced-motion. */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={cx(
        "transition duration-300 ease-out will-change-[opacity,transform,filter]",
        shown ? "scale-100 opacity-100 blur-0" : "scale-[0.98] opacity-0 blur-[2px]",
        "motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:blur-0 motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Palavra com marca-texto na cor de destaque. */
function Marker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block -rotate-1 rounded-xl bg-accent-400 px-3 text-white">
      {children}
    </span>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Shell() {
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-separator-border bg-background-full/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#inicio" className="text-title-3-semibold">
            lucasfer<span className="text-text-tertiary">.tech</span>
          </a>
          <nav className="hidden items-center gap-7 text-body-medium text-text-secondary md:flex">
            <a href="#trajetoria" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Trajetória</a>
            <a href="#atuacao" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Atuação</a>
            <a href="#formacao" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Formação</a>
            <a href="#/design" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Design</a>
          </nav>
          <div className="flex items-center gap-2">
            <SocialButton brand="linkedin" iconOnly href={LINKS.linkedin} aria-label="LinkedIn de Lucas Fernandes" />
            <Button size="small" leadingIcon={RiWhatsappLine} onClick={() => window.open(LINKS.whatsapp, "_blank")}>
              Fale comigo
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section id="inicio" className="pb-16 pt-16 md:pb-20 md:pt-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block -rotate-3">
                <Badge color="primary">Disponível</Badge>
              </span>
              <span className="inline-block rotate-2">
                <Chip color="lime" variant="subtle">respondo em 24h</Chip>
              </span>
            </div>
            <p className="mt-6 text-body-bold text-text-secondary">
              Dev · Sales OPS · Growth · MKT · Automação · IA
            </p>
            <h1 className="mt-3 max-w-4xl text-display-1-bold">
              Atenção vira <Marker>receita.</Marker>
            </h1>
            <p className="mt-6 max-w-2xl text-body-regular text-text-secondary">
              Sou Lucas Fernandes, Líder de Desenvolvimento na ESCALE BIZ. Conecto Marketing
              e Growth com CRM, automação e IA — e construo o software que opera tudo isso.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Button leadingIcon={RiWhatsappLine} onClick={() => window.open(LINKS.whatsapp, "_blank")}>
                Fale comigo
              </Button>
              <Button variant="secondary" trailingIcon={RiArrowRightLine} onClick={() => scrollTo("trajetoria")}>
                Ver trajetória
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <Avatar initials="LF" size="lg" />
              <p className="text-body-2-medium text-text-secondary">
                <span className="text-body-bold text-text-primary">3.610 seguidores</span> • 500+ conexões no LinkedIn
                <span className="mt-0.5 block text-text-tertiary">ESCALE BIZ · Fortaleza, Brasil</span>
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Ticker em faixa sólida */}
      <div className="overflow-hidden bg-accent-500 py-3">
        <div className="animate-ticker flex w-max items-center gap-6">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-6 text-body-bold text-white" aria-hidden={i >= TICKER.length}>
              <span className="text-white/70">▪</span> {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* 01 Trajetória — timeline com logo-tiles */}
        <section id="trajetoria" className="py-20 md:py-24">
          <Reveal>
            <Eyebrow index="01" label="Trajetória" />
            <h2 className="mt-2 max-w-2xl text-display-3-bold">Quatro capítulos.</h2>
          </Reveal>
          <div className="relative mt-10 ms-6 border-s-2 border-separator-border ps-10 md:ms-8 md:ps-14">
            {JOBS.map((j) => (
              <Reveal key={j.title} className="relative pb-12 last:pb-0">
                <span
                  aria-hidden
                  className={cx(
                    "absolute -start-[62px] grid size-12 place-items-center rounded-2xl text-body-bold md:-start-[86px]",
                    j.tileCls,
                 )}
                >
                  {j.tile}
                </span>
                <p className="text-caption-1-semibold text-text-tertiary">{j.category}</p>
                <h3 className="mt-1 text-title-3-semibold">{j.title}</h3>
                <p className="mt-2 max-w-2xl text-body-regular text-text-secondary">{j.desc}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge color={j.status.primary ? "primary" : "neutral"}>{j.status.label}</Badge>
                  {j.stack.map((s) => (
                    <Chip key={s} variant="caption">{s}</Chip>
                  ))}
                </div>
                <p className="mt-3 text-body-2-medium text-text-tertiary">{j.foot}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
            >
              Perfil completo no LinkedIn
              <RiArrowRightUpLine className="size-4" aria-hidden />
            </a>
          </Reveal>
        </section>

        {/* 02 Atuação — cards tingidos */}
        <section id="atuacao" className="py-20 md:py-24">
          <Reveal>
            <Eyebrow index="02" label="Atuação" />
            <h2 className="mt-2 max-w-2xl text-display-3-bold">Onde eu gero <Marker>receita.</Marker></h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {SERVICES.map((g, i) => (
              <Reveal key={g.title} className="h-full">
                <div className={cx("flex h-full flex-col rounded-3xl border border-border-button-default p-6", g.cardCls)}>
                  <div className="flex items-center justify-between">
                    <g.icon className={cx("size-7", g.titleCls)} aria-hidden />
                    <span className="font-mono text-body-2-medium text-text-tertiary">0{i + 1}</span>
                  </div>
                  <h3 className={cx("mt-4 text-headline-medium", g.titleCls)}>{g.title}</h3>
                  <p className="mt-1 flex-1 text-body-2-medium text-text-secondary">{g.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <Chip key={s} variant="subtle">{s}</Chip>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 max-w-lg text-body-regular text-text-secondary">
              Base técnica: React, Next.js, Node e Python — eu também construo o software que roda a operação.
            </p>
          </Reveal>
        </section>

        {/* 03 Formação */}
        <section id="formacao" className="py-20 md:py-24">
          <Reveal>
            <Eyebrow index="03" label="Formação" />
            <h2 className="mt-2 max-w-2xl text-display-3-bold">Estudo em público.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full items-start gap-4 rounded-3xl border border-border-button-default bg-background-primary-default p-6">
                <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-2xl bg-status-purple-background text-body-bold text-status-purple-text">UN</span>
                <div>
                  <p className="text-caption-1-semibold text-text-tertiary">Graduação</p>
                  <h3 className="mt-1 text-headline-medium">Marketing — UNIFOR</h3>
                  <p className="mt-1 text-body-2-medium text-text-secondary">2018 — 2024 · Universidade de Fortaleza</p>
                </div>
              </div>
            </Reveal>
            <Reveal className="h-full">
              <div className="flex h-full items-start gap-4 rounded-3xl border border-border-button-default bg-background-primary-default p-6">
                <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-2xl bg-status-yellow-background text-body-bold text-status-yellow-text">GR</span>
                <div>
                  <p className="text-caption-1-semibold text-text-tertiary">Técnico</p>
                  <h3 className="mt-1 text-headline-medium">Graphic Design — Gracom</h3>
                  <p className="mt-1 text-body-2-medium text-text-secondary">2013 — 2017 · Escola de Efeitos Visuais</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-4 divide-y divide-separator-border rounded-3xl border border-border-button-default bg-background-primary-default">
              <p className="px-6 py-4 text-caption-1-semibold text-text-tertiary">Certificados recentes — 21 no total</p>
              {CERTS.map(([initials, tileCls, title, org]) => (
                <div key={title} className="flex items-center gap-4 px-6 py-4">
                  <span aria-hidden className={cx("grid size-10 shrink-0 place-items-center rounded-xl text-body-2-bold", tileCls)}>
                    {initials}
                  </span>
                  <div className="grid flex-1 gap-1 md:grid-cols-[1fr_auto] md:items-baseline">
                    <p className="text-body-medium">{title}</p>
                    <p className="text-body-2-medium text-text-tertiary">{org}</p>
                  </div>
                </div>
              ))}
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-1 px-6 py-4 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
              >
                Ver as 21 no LinkedIn
                <RiArrowRightUpLine className="size-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </section>
      </div>

      {/* CTA — faixa escura */}
      <div className="dark">
        <div className="bg-background-full text-text-primary">
          <div className="mx-auto max-w-6xl px-6">
            <section id="contato" className="py-20 md:py-24">
              <Reveal>
                <Eyebrow index="04" label="Contato" />
                <h2 className="mt-2 max-w-3xl text-display-2-bold">
                  Vamos transformar atenção em <Marker>receita.</Marker>
                </h2>
                <p className="mt-4 max-w-lg text-body-regular text-text-secondary">
                  Projetos, parcerias ou uma vaga onde marketing e tecnologia se encontram.
                  Chama no WhatsApp — respondo rápido.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <Button leadingIcon={RiWhatsappLine} onClick={() => window.open(LINKS.whatsapp, "_blank")}>
                    Chamar no WhatsApp
                  </Button>
                  <SocialButton brand="linkedin" href={LINKS.linkedin}>LinkedIn</SocialButton>
                  <SocialButton brand="github" href={LINKS.github}>GitHub</SocialButton>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <SocialButton brand="x" href={LINKS.x}>X</SocialButton>
                  <SocialButton brand="instagram" href={LINKS.instagram}>Instagram</SocialButton>
                </div>
                <p className="mt-6 text-body-2-medium text-text-tertiary">
                  Prefere email?{" "}
                  <a href={LINKS.email} className="underline-offset-4 hover:underline">
                    contato@lucasfernandes.dev
                  </a>
                </p>
              </Reveal>
            </section>
          </div>
        </div>
      </div>

      <footer className="border-t-4 border-accent-500">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-title-3-semibold">lucasfer<span className="text-text-tertiary">.tech</span></p>
            <p className="mt-2 max-w-xs text-body-2-medium text-text-secondary">
              Dev · Growth · Automação · IA. Atenção vira receita.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-caption-1-semibold text-text-tertiary">Site</p>
              <div className="mt-3 flex flex-col gap-2 text-body-medium text-text-secondary">
                <a href="#trajetoria" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Trajetória</a>
                <a href="#atuacao" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Atuação</a>
                <a href="#formacao" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Formação</a>
                <a href="#/design" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Design system</a>
              </div>
            </div>
            <div>
              <p className="text-caption-1-semibold text-text-tertiary">Social</p>
              <div className="mt-3 flex flex-col gap-2 text-body-medium text-text-secondary">
                <a href={LINKS.linkedin} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">LinkedIn</a>
                <a href={LINKS.github} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">GitHub</a>
                <a href={LINKS.x} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">X</a>
                <a href={LINKS.instagram} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Instagram</a>
              </div>
            </div>
            <div>
              <p className="text-caption-1-semibold text-text-tertiary">Contato</p>
              <div className="mt-3 flex flex-col gap-2 text-body-medium text-text-secondary">
                <a href={LINKS.whatsapp} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">WhatsApp</a>
                <a href={LINKS.email} className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Email</a>
                <a href="#inicio" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Topo ↑</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-separator-border">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-body-2-medium text-text-tertiary">
            <p>© {new Date().getFullYear()} Lucas Fernandes</p>
            <p>Feito com BoardUI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

type View = "site" | "design";

function getView(): View {
  if (typeof window === "undefined") return "site";
  if (window.location.hash === "#/design") return "design";
  if (window.location.pathname.replace(/\/$/, "") === "/design") return "design";
  return "site";
}

export default function App() {
  const [view, setView] = useState<View>(getView);

  useEffect(() => {
    const onChange = () => setView(getView());
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);

  useEffect(() => {
    document.title =
      view === "design"
        ? "Design System — lucasfer.tech"
        : "Lucas Fernandes — Dev · Growth · Automação · IA";
  }, [view]);

  return (
    <DirectionProvider locale="pt-BR">
      <Suspense
        fallback={
          <div className="grid min-h-screen place-items-center bg-background-full">
            <p className="text-body-medium text-text-tertiary">Carregando design system…</p>
          </div>
        }
      >
        {view === "design" ? <DesignSystem /> : <Shell />}
      </Suspense>
    </DirectionProvider>
  );
}

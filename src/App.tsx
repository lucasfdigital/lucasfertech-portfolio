import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiMailLine,
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
  // TODO: confirmar email real de contato
  email: "mailto:contato@lucasfernandes.dev",
};

const TICKER = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI",
  "PostgreSQL", "React Native", "Flutter", "Docker", "AWS", "Vercel",
];

/* TODO: trocar pelos 3 repos reais de destaque (categoria, resultado, status, url do repo) */
const CASES = [
  {
    n: "01",
    category: "E-commerce",
    title: "Loja headless",
    desc: "Loja completa em Next.js + Stripe, checkout em 1 clique.",
    // TODO: confirmar métrica real
    metric: "98 Lighthouse",
    status: { label: "Em produção", primary: true },
    stack: ["Next.js", "Stripe", "PostgreSQL"],
    platforms: "Web • Stripe • Vercel",
  },
  {
    n: "02",
    category: "SaaS",
    title: "Dashboard analytics",
    desc: "Painel em tempo real com gráficos e exportação CSV/PDF.",
    // TODO: confirmar métrica real
    metric: "Tempo real",
    // TODO: confirmar se o repo é público
    status: { label: "Open source", primary: false },
    stack: ["React", "Python", "WebSocket"],
    platforms: "Web • FastAPI • Docker",
  },
  {
    n: "03",
    category: "Mobile",
    title: "App delivery",
    desc: "Rastreio em tempo real, push notifications e pagamento integrado.",
    // TODO: confirmar métrica real (lojas, downloads)
    metric: "iOS + Android",
    status: { label: "Nas lojas", primary: false },
    stack: ["React Native", "Node.js"],
    platforms: "iOS • Android • Maps",
  },
];

const STACKS = [
  {
    title: "Frontend",
    desc: "Interfaces rápidas que convertem.",
    items: ["TypeScript", "React", "Next.js", "Tailwind"],
  },
  {
    title: "Backend",
    desc: "APIs sólidas que aguentam escala.",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Mobile & Cloud",
    desc: "Do app publicado ao deploy contínuo.",
    items: ["React Native", "Flutter", "Docker", "AWS"],
  },
];

const PRINCIPLES = [
  { n: "01", title: "Escopo fechado em 24h", desc: "Você sabe o que recebe, quando recebe e quanto custa — antes de pagar qualquer coisa." },
  { n: "02", title: "Entrega parcial toda semana", desc: "Preview navegável a cada semana. Nada de sumir por um mês e voltar com surpresa." },
  { n: "03", title: "Código que você herda sem medo", desc: "Tipado, testado no essencial e documentado o bastante pra outro dev continuar." },
  { n: "04", title: "30 dias de suporte", desc: "Depois do deploy eu continuo por perto. Bug meu, correção minha." },
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

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Shell() {
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-separator-border bg-background-full/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#inicio" className="text-title-3-semibold">
            lucasfer<span className="text-text-tertiary">.tech</span>
          </a>
          <nav className="hidden items-center gap-7 text-body-medium text-text-secondary md:flex">
            <a href="#trabalhos" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Trabalhos</a>
            <a href="#stack" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Stack</a>
            <a href="#principios" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Princípios</a>
            <a href="#/design" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Design</a>
          </nav>
          <div className="flex items-center gap-2">
            <SocialButton brand="github" iconOnly href={LINKS.github} aria-label="GitHub de Lucas Fernandes" />
            <Button size="small" trailingIcon={RiArrowRightLine} onClick={() => scrollTo("contato")}>
              Contrate-me
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section id="inicio" className="pb-14 pt-20 md:pt-28">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Badge color="primary">Disponível</Badge>
              <span className="text-body-medium text-text-secondary">Full-stack developer • resposta em 24h</span>
            </div>
            <h1 className="mt-6 max-w-3xl text-title-1-medium">
              Código que vira produto.
            </h1>
            <p className="mt-5 max-w-2xl text-body-regular text-text-secondary">
              Sou Lucas Fernandes. Web apps em React e Next.js, APIs em Node e Python,
              apps mobile publicados — do escopo ao deploy, sem intermediário.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Button trailingIcon={RiArrowRightLine} onClick={() => scrollTo("trabalhos")}>
                Ver trabalhos
              </Button>
              <Button variant="secondary" leadingIcon={RiMailLine} onClick={() => (window.location.href = LINKS.email)}>
                contato@lucasfernandes.dev
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
              >
                Open source no GitHub
                <RiArrowRightUpLine className="size-4" aria-hidden />
              </a>
              <span className="text-body-2-medium text-text-tertiary">React • Next.js • Node • Python</span>
            </div>
            <div className="mt-8 flex items-center gap-3">
              {/* TODO: Avatar src com foto real quando enviar */}
              <Avatar initials="LF" size="md" />
              <p className="text-body-2-medium text-text-secondary">
                20+ projetos entregues • 4.9/5 avaliação média
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-separator-border py-3" aria-hidden={false}>
        <div className="animate-ticker flex w-max items-center gap-6">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-6 text-body-2-medium text-text-tertiary" aria-hidden={i >= TICKER.length}>
              <span className="text-text-placeholder">▪</span> {t}
            </span>
          ))}
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-6">
        {/* 01 Lineup */}
        <section id="trabalhos" className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="01" label="Trabalhos selecionados" />
            <h2 className="mt-2 max-w-xl text-title-2-medium">Três crafts. Escolha um pra explorar.</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-separator-border border-y border-separator-border">
            {CASES.map((c) => (
              <Reveal key={c.n}>
                <article className="grid gap-5 py-10 md:grid-cols-[56px_1fr] md:gap-8">
                  <span className="text-body-medium text-text-tertiary">{c.n}</span>
                  <div>
                    <p className="text-caption-1-semibold text-text-tertiary">{c.category}</p>
                    <h3 className="mt-1 text-title-3-semibold">{c.title}</h3>
                    <p className="mt-2 max-w-xl text-body-regular text-text-secondary">
                      {c.desc} <span className="text-text-primary">{c.metric}.</span>
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <Badge color={c.status.primary ? "primary" : "neutral"}>{c.status.label}</Badge>
                      {c.stack.map((s) => (
                        <Chip key={s} variant="caption">{s}</Chip>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <span className="text-body-2-medium text-text-tertiary">{c.platforms}</span>
                      <a
                        href={LINKS.github}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
                      >
                        Explorar código
                        <RiArrowRightUpLine className="size-4" aria-hidden />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 02 Stack */}
        <section id="stack" className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="02" label="Stack" />
            <h2 className="mt-2 max-w-xl text-title-2-medium">Do front ao deploy, sem terceirizar nada.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {STACKS.map((g, i) => (
              <Reveal key={g.title}>
                <div className="h-full rounded-3xl border border-border-button-default bg-background-primary-default p-6">
                  <p className="text-body-2-medium text-text-tertiary">0{i + 1}</p>
                  <h3 className="mt-1 text-headline-medium">{g.title}</h3>
                  <p className="mt-1 text-body-2-medium text-text-secondary">{g.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <Chip key={s} variant="subtle">{s}</Chip>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 03 Princípios */}
        <section id="principios" className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="03" label="Princípios" />
            <h2 className="mt-2 max-w-xl text-title-2-medium">Feito do jeito difícil.</h2>
            <p className="mt-3 max-w-lg text-body-regular text-text-secondary">
              Atalho cobra juros. Estas são as regras que valem pra todo projeto que eu assumo.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <Reveal key={p.n}>
                <div className="border-t border-separator-border pt-5">
                  <p className="text-body-2-medium text-text-tertiary">{p.n}</p>
                  <h3 className="mt-1 text-headline-medium">{p.title}</h3>
                  <p className="mt-2 text-body-regular text-text-secondary">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section id="contato" className="pb-24 pt-4 md:pb-32">
          <Reveal>
            <div className="rounded-3xl border border-border-button-default bg-background-secondary-default p-8 md:p-14">
              <h2 className="max-w-xl text-title-2-medium">Tem um projeto? Vamos construir.</h2>
              <p className="mt-3 max-w-lg text-body-regular text-text-secondary">
                Freelas, MVP ou CLT remota. Me diz o que precisa e o prazo — respondo em até 24h com proposta e estimativa.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <Button leadingIcon={RiMailLine} onClick={() => (window.location.href = LINKS.email)}>
                  Enviar email
                </Button>
                <SocialButton brand="github" href={LINKS.github}>GitHub</SocialButton>
                <SocialButton brand="linkedin" href={LINKS.linkedin}>LinkedIn</SocialButton>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <SocialButton brand="x" href={LINKS.x}>X</SocialButton>
                <SocialButton brand="instagram" href={LINKS.instagram}>Instagram</SocialButton>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-separator-border">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-title-3-semibold">lucasfer<span className="text-text-tertiary">.tech</span></p>
            <p className="mt-2 max-w-xs text-body-2-medium text-text-secondary">
              Full-stack developer. Código que vira produto.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-caption-1-semibold text-text-tertiary">Site</p>
              <div className="mt-3 flex flex-col gap-2 text-body-medium text-text-secondary">
                <a href="#trabalhos" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Trabalhos</a>
                <a href="#stack" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Stack</a>
                <a href="#principios" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Princípios</a>
                <a href="#/design" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Design system</a>
              </div>
            </div>
            <div>
              <p className="text-caption-1-semibold text-text-tertiary">Social</p>
              <div className="mt-3 flex flex-col gap-2 text-body-medium text-text-secondary">
                <a href={LINKS.github} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">GitHub</a>
                <a href={LINKS.linkedin} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">LinkedIn</a>
                <a href={LINKS.x} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">X</a>
                <a href={LINKS.instagram} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Instagram</a>
              </div>
            </div>
            <div>
              <p className="text-caption-1-semibold text-text-tertiary">Contato</p>
              <div className="mt-3 flex flex-col gap-2 text-body-medium text-text-secondary">
                <a href={LINKS.email} className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Email</a>
                <a href="#inicio" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Topo ↑</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-separator-border">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-body-2-medium text-text-tertiary">
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
        : "Lucas Fernandes — Desenvolvedor Full Stack";
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

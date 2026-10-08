import { useEffect, useRef, useState, type ReactNode } from "react";
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

const LINKS = {
  github: "https://github.com/lucasfdigital",
  linkedin: "https://www.linkedin.com/in/lucasfia/",
  x: "https://x.com/lucasfertech",
  instagram: "https://www.instagram.com/lucasfer.tech/",
  // TODO: confirmar email real de contato
  email: "mailto:contato@lucasfernandes.dev",
};

/* TODO: trocar pelos 3 repos reais de destaque (título, resultado, stack, url do repo) */
const CASES = [
  {
    n: "01",
    title: "E-commerce Headless",
    result: "Checkout em 1 clique, loja completa Next.js + Stripe.",
    // TODO: confirmar métrica real (ex.: Lighthouse, conversão)
    metric: "98 Lighthouse",
    stack: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    n: "02",
    title: "Dashboard SaaS",
    result: "Analytics em tempo real com exportação CSV/PDF.",
    // TODO: confirmar métrica real (ex.: usuários, uptime)
    metric: "Realtime",
    stack: ["React", "Python", "WebSocket"],
  },
  {
    n: "03",
    title: "App Delivery",
    result: "Rastreio em tempo real, push e pagamento integrado.",
    // TODO: confirmar métrica real (ex.: lojas, downloads)
    metric: "iOS + Android",
    stack: ["React Native", "Node.js"],
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

/** Entrada padrão BoardUI: fade + scale + blur, uma vez, com reduced-motion. */
function Reveal({ children, className }: { children: ReactNode; className?: string }) {
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
            <a href="#contato" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Contato</a>
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
        <section id="inicio" className="pb-20 pt-20 md:pb-28 md:pt-28">
          <Reveal>
            <div className="flex items-center gap-3">
              <Badge color="primary">Disponível</Badge>
              <span className="text-body-medium text-text-secondary">Novos projetos • resposta em 24h</span>
            </div>
            <h1 className="mt-6 max-w-3xl text-title-1-medium">
              Lucas Fernandes. Full stack que shippa produto, não só código.
            </h1>
            <p className="mt-5 max-w-2xl text-body-regular text-text-secondary">
              Web apps em React e Next.js, APIs em Node e Python, apps mobile publicados.
              Escopo fechado em 24h, entrega toda semana, suporte de verdade depois do deploy.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Button trailingIcon={RiArrowRightLine} onClick={() => scrollTo("trabalhos")}>
                Ver trabalhos
              </Button>
              <Button variant="secondary" leadingIcon={RiMailLine} onClick={() => (window.location.href = LINKS.email)}>
                contato@lucasfernandes.dev
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-3">
              {/* TODO: Avatar src com foto real quando enviar */}
              <Avatar initials="LF" size="md" />
              <p className="text-body-2-medium text-text-secondary">
                20+ projetos entregues • 4.9/5 avaliação média
              </p>
            </div>
          </Reveal>
        </section>

        {/* Métricas hairline */}
        <Reveal>
          <dl className="grid grid-cols-3 gap-6 border-y border-separator-border py-8">
            {[
              // TODO: confirmar números reais
              ["3+", "anos de experiência"],
              ["20+", "projetos entregues"],
              ["24h", "prazo de resposta"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-title-2-medium">{v}</dt>
                <dd className="mt-1 text-body-2-medium text-text-secondary">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Trabalhos */}
        <section id="trabalhos" className="py-20 md:py-28">
          <Reveal>
            <p className="text-caption-1-semibold text-text-tertiary">Trabalhos selecionados</p>
            <h2 className="mt-2 max-w-xl text-title-2-medium">Três projetos que resumem o que eu entrego.</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-separator-border border-y border-separator-border">
            {CASES.map((c) => (
              <Reveal key={c.n}>
                <article className="group grid gap-4 py-10 md:grid-cols-[64px_1fr_auto] md:items-baseline">
                  <span className="text-body-medium text-text-tertiary">{c.n}</span>
                  <div>
                    <h3 className="text-title-3-semibold">{c.title}</h3>
                    <p className="mt-2 max-w-xl text-body-regular text-text-secondary">
                      {c.result} <span className="text-text-primary">{c.metric}.</span>
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.stack.map((s) => (
                        <Chip key={s} variant="caption">{s}</Chip>
                      ))}
                    </div>
                  </div>
                  <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
                  >
                    Ver código
                    <RiArrowRightUpLine className="size-4" aria-hidden />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
            >
              Todo o resto está no GitHub
              <RiArrowRightUpLine className="size-4" aria-hidden />
            </a>
          </Reveal>
        </section>

        {/* Stack */}
        <section id="stack" className="py-20 md:py-28">
          <Reveal>
            <p className="text-caption-1-semibold text-text-tertiary">Stack</p>
            <h2 className="mt-2 max-w-xl text-title-2-medium">Do front ao deploy, sem terceirizar nada.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {STACKS.map((g) => (
              <Reveal key={g.title}>
                <div className="h-full rounded-3xl border border-border-button-default bg-background-primary-default p-6">
                  <h3 className="text-headline-medium">{g.title}</h3>
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
          <Reveal>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {["Escopo fechado em 24h", "Entrega parcial toda semana", "30 dias de suporte pós-deploy"].map((t, i) => (
                <p key={t} className="text-body-2-medium text-text-secondary">
                  <span className="text-text-tertiary">0{i + 1} — </span>{t}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Contato */}
        <section id="contato" className="pb-24 pt-4 md:pb-32">
          <Reveal>
            <div className="rounded-3xl border border-border-button-default bg-background-secondary-default p-8 md:p-14">
              <p className="text-caption-1-semibold text-text-tertiary">Contato</p>
              <h2 className="mt-2 max-w-xl text-title-2-medium">Tem um projeto? Me conta em uma mensagem.</h2>
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
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-body-2-medium text-text-tertiary">
          <p>© {new Date().getFullYear()} Lucas Fernandes</p>
          <div className="flex gap-5">
            <a href={LINKS.github} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">GitHub</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">LinkedIn</a>
            <a href="#inicio" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Topo ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <DirectionProvider locale="pt-BR">
      <Shell />
    </DirectionProvider>
  );
}

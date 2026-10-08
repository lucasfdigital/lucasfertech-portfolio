import { RiArrowRightLine, RiArrowRightUpLine, RiWhatsappLine } from "@remixicon/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badge";
import { Chip } from "@/components/base/badges/chip";
import { Button } from "@/components/base/buttons/button";
import { CLIENTS, JOBS, LINKS, POSTS, TICKER } from "../content";
import { Eyebrow, Marker, Reveal } from "../App";
import { CtaBand, SiteFooter, SiteNav, go } from "../chrome";

function ClientCard({ i }: { i: number }) {
  const c = CLIENTS[i];
  if (!c) return null;
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border-button-default bg-background-primary-default p-6">
      <Badge color={c.status.primary ? "primary" : "neutral"}>{c.status.label}</Badge>
      <h3 className="mt-3 text-headline-medium">{c.name}</h3>
      <p className="mt-1 flex-1 text-body-2-medium text-text-secondary">{c.desc}</p>
      {c.stack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {c.stack.map((s) => (
            <Chip key={s} variant="caption">{s}</Chip>
          ))}
        </div>
      )}
      {c.url && (
        <a
          href={c.url}
          target="_blank"
          rel="noopener"
          className="mt-4 inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
        >
          {c.cta ? "Quero o meu" : "Visitar site"}
          <RiArrowRightUpLine className="size-4" aria-hidden />
        </a>
      )}
    </article>
  );
}

export default function Home() {
  const latest = POSTS[0];
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="home" />

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="pb-16 pt-16 md:pb-20 md:pt-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block">
                <Badge color="primary">Disponível</Badge>
              </span>
              <span className="inline-block">
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
              <Button variant="secondary" trailingIcon={RiArrowRightLine} onClick={() => go("#/portfolio")}>
                Ver portfólio
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
        {/* Trajetória em 4 linhas */}
        <section className="py-16 md:py-20">
          <Reveal>
            <Eyebrow index="01" label="Trajetória" />
            <h2 className="mt-2 text-display-3-bold">Quem opera.</h2>
          </Reveal>
          <Reveal>
            <div className="mt-8 divide-y divide-separator-border border-y border-separator-border">
              {JOBS.map((j) => (
                <div key={j.title} className="grid gap-1 py-4 md:grid-cols-[1fr_auto] md:items-baseline">
                  <p className="text-body-medium">
                    <span className="text-body-bold">{j.title.split(" — ")[0]}</span>
                    <span className="text-text-secondary"> — {j.title.split(" — ")[1]}</span>
                  </p>
                  <p className="text-body-2-medium text-text-tertiary">{j.foot.split(" · ")[0]}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
            >
              Currículo completo no LinkedIn
              <RiArrowRightUpLine className="size-4" aria-hidden />
            </a>
          </Reveal>
        </section>

        {/* Prévia portfólio */}
        <section className="py-16 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow index="02" label="Portfólio" />
                <h2 className="mt-2 text-display-3-bold">Sites de clientes.</h2>
              </div>
              <button
                type="button"
                onClick={() => go("#/portfolio")}
                className="inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
              >
                Ver tudo
                <RiArrowRightLine className="size-4" aria-hidden />
              </button>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[0, 1].map((i) => (
              <Reveal key={i} className="h-full">
                <ClientCard i={i} />
              </Reveal>
            ))}
            <Reveal className="h-full">
              <button
                type="button"
                onClick={() => go("#/portfolio")}
                className="flex h-full min-h-44 w-full flex-col items-start justify-between gap-6 rounded-3xl bg-accent-500 p-6 text-left text-white transition hover:brightness-[1.06] active:brightness-95"
              >
                <span className="text-headline-medium">+ ver portfólio completo</span>
                <span className="inline-flex items-center gap-1 text-body-medium">
                  Abrir página
                  <RiArrowRightLine className="size-4" aria-hidden />
                </span>
              </button>
            </Reveal>
          </div>
        </section>

        {/* Prévia blog */}
        {latest && (
          <section className="py-16 md:py-20">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Eyebrow index="03" label="Blog" />
                  <h2 className="mt-2 text-display-3-bold">Último texto.</h2>
                </div>
                <button
                  type="button"
                  onClick={() => go("#/blog")}
                  className="inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
                >
                  Ver blog
                  <RiArrowRightLine className="size-4" aria-hidden />
                </button>
              </div>
            </Reveal>
            <Reveal>
              <button
                type="button"
                onClick={() => go(`#/blog/${latest.slug}`)}
                className="mt-8 block w-full rounded-3xl border border-border-button-default bg-background-primary-default p-8 text-left transition-colors duration-150 hover:border-border-button-hover active:border-border-button-hover md:p-10"
              >
                <p className="text-body-2-medium text-text-tertiary">{latest.date}</p>
                <p className="mt-2 text-title-2-medium">{latest.title}</p>
                <p className="mt-2 max-w-2xl text-body-regular text-text-secondary">{latest.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-body-medium text-text-secondary">
                  Ler texto
                  <RiArrowRightLine className="size-4" aria-hidden />
                </span>
              </button>
            </Reveal>
          </section>
        )}
      </div>

      <CtaBand />
      <SiteFooter />
    </div>
  );
}

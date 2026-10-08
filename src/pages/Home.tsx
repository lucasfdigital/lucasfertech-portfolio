import { useEffect, useState } from "react";
import { RiArrowRightLine, RiArrowRightUpLine, RiWhatsappLine } from "@remixicon/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badge";
import { Chip } from "@/components/base/badges/chip";
import { Button } from "@/components/base/buttons/button";
import { CLIENTS, JOBS, LINKS, POSTS, TICKER } from "../content";
import { Marker, Reveal } from "../App";
import { CtaBand, SiteFooter, SiteNav, go } from "../chrome";

const ROLES = ["Dev · Growth · Automação · IA", "Líder de Desenvolvimento", "CRM que converte", "Código que vende"];

function useRotatingWord(words: string[]) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, [words.length]);
  return words[i];
}

function Terminal() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border-button-default bg-background-primary-default shadow-card">
      <div className="flex items-center gap-2 border-b border-separator-border px-5 py-3">
        <span aria-hidden className="size-3 rounded-full bg-status-rose-background" />
        <span aria-hidden className="size-3 rounded-full bg-status-yellow-background" />
        <span aria-hidden className="size-3 rounded-full bg-status-lime-background" />
        <span className="ml-2 font-mono text-body-2-medium text-text-tertiary">lucas@escale: ~</span>
      </div>
      <div className="space-y-3 p-5 font-mono text-body-2-medium md:text-body-medium">
        <p><span className="text-text-tertiary">$ </span><span className="text-text-primary">whoami</span></p>
        <p className="text-text-secondary">lucas-fernandes — dev, growth, IA · Fortaleza, BR</p>
        <p><span className="text-text-tertiary">$ </span><span className="text-text-primary">cat stack.txt</span></p>
        <p className="text-text-secondary">react · next.js · node · python · crm · automação</p>
        <p><span className="text-text-tertiary">$ </span><span className="text-text-primary">./gerar-receita.sh</span></p>
        <p className="text-text-secondary">[ok] atenção convertida em receita<span className="caret-blink" aria-hidden>▍</span></p>
      </div>
    </div>
  );
}

export default function Home() {
  const role = useRotatingWord(ROLES);
  const latest = POSTS[0];
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="home" />

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-12 pb-16 pt-16 md:grid-cols-[1.05fr_0.95fr] md:pb-20 md:pt-24">
          <Reveal>
            <p className="font-mono text-body-medium text-text-secondary">Olá, me chamo</p>
            <h1 className="mt-3 text-display-1-bold">
              Lucas Fernandes.
              <span className="mt-1 block text-text-secondary">Eu transformo atenção em <Marker>receita.</Marker></span>
            </h1>
            <p className="mt-4 font-mono text-body-2-medium text-text-tertiary">
              <span aria-hidden>$ </span>{role}
              <span className="caret-blink" aria-hidden>▍</span>
            </p>
            <p className="mt-5 max-w-xl text-body-regular text-text-secondary">
              Líder de Desenvolvimento na ESCALE BIZ. Conecto Marketing e Growth com CRM,
              automação e IA — e construo o software que opera tudo isso.
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
              </p>
            </div>
          </Reveal>
          <Reveal className="w-full">
            <Terminal />
          </Reveal>
        </section>
      </main>

      {/* Ticker em faixa sólida */}
      <div className="overflow-hidden bg-accent-500 py-3">
        <div className="animate-ticker flex w-max items-center gap-6">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-6 font-mono text-body-2-medium text-white" aria-hidden={i >= TICKER.length}>
              <span className="text-white/70">▪</span> {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Trajetória */}
        <section className="py-20 md:py-24">
          <Reveal>
            <p className="font-mono text-body-2-medium text-text-tertiary">01. trajetória</p>
            <h2 className="mt-2 max-w-2xl text-display-3-bold">Onde eu operei.</h2>
          </Reveal>
          <div className="relative mt-10 ms-1 border-s-2 border-separator-border ps-8 md:ms-2 md:ps-12">
            {JOBS.map((j) => (
              <Reveal key={j.title} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute -start-[41px] grid size-12 place-items-center rounded-2xl text-body-bold md:-start-[73px] ${j.tileCls}`}
                >
                  {j.tile}
                </span>
                <p className="font-mono text-body-2-medium text-text-tertiary">{j.category}</p>
                <h3 className="mt-1 text-title-3-semibold">{j.title}</h3>
                <p className="mt-2 max-w-2xl text-body-regular text-text-secondary">{j.desc}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge color={j.status.primary ? "primary" : "neutral"}>{j.status.label}</Badge>
                  {j.stack.map((s) => (
                    <Chip key={s} variant="caption">{s}</Chip>
                  ))}
                </div>
                <p className="mt-3 font-mono text-body-2-medium text-text-tertiary">{j.foot}</p>
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
              <span className="mr-1 font-mono text-body-2-medium text-text-tertiary">↗</span>
              Perfil completo no LinkedIn
              <RiArrowRightUpLine className="size-4" aria-hidden />
            </a>
          </Reveal>
        </section>

        {/* Prévia portfólio */}
        <section className="py-16 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-body-2-medium text-text-tertiary">02. portfólio em destaque</p>
                <h2 className="mt-2 text-display-3-bold">Trabalho recente.</h2>
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
            {[0, 1].map((i) => {
              const c = CLIENTS[i];
              if (!c) return null;
              return (
                <Reveal key={`${c.name}-${i}`} className="h-full">
                  <article className="flex h-full flex-col rounded-3xl border border-border-button-default bg-background-primary-default p-6">
                    <Badge color={c.status.primary ? "primary" : "neutral"}>{c.status.label}</Badge>
                    <h3 className="mt-3 text-headline-medium">{c.name}</h3>
                    <p className="mt-1 flex-1 text-body-2-medium text-text-secondary">{c.desc}</p>
                  </article>
                </Reveal>
              );
            })}
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
                  <p className="font-mono text-body-2-medium text-text-tertiary">03. do blog</p>
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
                <p className="font-mono text-body-2-medium text-text-tertiary">{latest.date} · 3 min</p>
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

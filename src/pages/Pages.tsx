import { RiArrowRightUpLine, RiMailLine } from "@remixicon/react";
import { Badge } from "@/components/base/badges/badge";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/social-button/social-button";
import { LINKS, POSTS, TOOLS } from "../content";
import { Reveal } from "../App";
import { CtaBand, SiteFooter, SiteNav, go } from "../chrome";

const CATS = [...new Set(TOOLS.map((t) => t.cat))];

export function Ferramentas() {
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="ferramentas" />
      <main className="mx-auto max-w-6xl px-6">
        <section className="pb-8 pt-16 md:pt-24">
          <Reveal>
            <p className="font-mono text-body-2-medium text-text-tertiary">01. ferramentas</p>
            <h1 className="mt-2 max-w-3xl text-display-1-bold">O que eu uso e recomendo.</h1>
            <p className="mt-4 max-w-2xl text-body-regular text-text-secondary">
              Ferramentas testadas na operação real — nada de lista genérica.
              Cada uma aqui eu assino embaixo.
            </p>
          </Reveal>
        </section>

        {CATS.map((cat) => (
          <section key={cat} className="pb-16 md:pb-20">
            <Reveal>
              <p className="font-mono text-body-2-medium text-text-tertiary">~/ {cat.toLowerCase()}</p>
            </Reveal>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {TOOLS.filter((t) => t.cat === cat).map((t) => (
                <Reveal key={t.name} className="h-full">
                  <article className="flex h-full flex-col rounded-3xl border border-border-button-default bg-background-primary-default p-6 transition-colors duration-150 hover:border-border-button-hover active:border-border-button-hover md:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="font-mono text-body-bold">{t.name}</h2>
                      <Badge color="neutral">{t.cat}</Badge>
                    </div>
                    <p className="mt-2 flex-1 text-body-regular text-text-secondary">{t.desc}</p>
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener"
                      className="mt-5 inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
                    >
                      <span className="mr-1 font-mono text-body-2-medium text-text-tertiary">$</span>
                      Acessar ferramenta
                      <RiArrowRightUpLine className="size-4" aria-hidden />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <section className="pb-20 md:pb-24">
          <Reveal>
            <div className="rounded-3xl border border-separator-border p-8 text-center">
              <p className="font-mono text-body-2-medium text-text-tertiary">{"// roadmap"}</p>
              <p className="mt-2 text-headline-medium">A lista cresce toda semana.</p>
              <p className="mx-auto mt-2 max-w-md text-body-regular text-text-secondary">
                Uso ferramenta nova, testo na operação e só entra aqui o que sobrevive.
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <CtaBand />
      <SiteFooter />
    </div>
  );
}

export function BlogList() {
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="blog" />
      <main className="mx-auto max-w-6xl px-6">
        <section className="pb-8 pt-16 md:pt-24">
          <Reveal>
            <p className="font-mono text-body-2-medium text-text-tertiary">01. blog</p>
            <h1 className="mt-2 max-w-3xl text-display-1-bold">Marketing, CRM e IA sem enrolação.</h1>
            <p className="mt-4 max-w-2xl text-body-regular text-text-secondary">
              Textos curtos sobre o que eu aprendo operando: receita, funil, automação e inteligência artificial.
            </p>
          </Reveal>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="grid gap-4">
            {POSTS.map((p) => (
              <Reveal key={p.slug}>
                <button
                  type="button"
                  onClick={() => go(`#/blog/${p.slug}`)}
                  className="block w-full rounded-3xl border border-border-button-default bg-background-primary-default p-6 text-left transition-colors duration-150 hover:border-border-button-hover active:border-border-button-hover md:p-8"
                >
                  <p className="font-mono text-body-2-medium text-text-tertiary">{p.date} · 3 min</p>
                  <p className="mt-2 text-title-2-medium">{p.title}</p>
                  <p className="mt-2 max-w-2xl text-body-regular text-text-secondary">{p.excerpt}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <CtaBand />
      <SiteFooter />
    </div>
  );
}

export function BlogPost({ slug }: { slug: string }) {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) {
    return (
      <div className="min-h-screen bg-background-full text-text-primary">
        <SiteNav active="blog" />
        <main className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-mono text-body-2-medium text-text-tertiary">404</p>
          <p className="mt-2 text-title-2-medium">Texto não encontrado.</p>
          <button
            type="button"
            onClick={() => go("#/blog")}
            className="mt-4 text-body-medium text-text-secondary underline-offset-4 hover:underline"
          >
            Voltar pro blog
          </button>
        </main>
        <SiteFooter />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="blog" />
      <main className="mx-auto max-w-3xl px-6">
        <article className="pb-20 pt-16 md:pt-24">
          <Reveal>
            <button
              type="button"
              onClick={() => go("#/blog")}
              className="inline-flex items-center gap-1 font-mono text-body-2-medium text-text-tertiary transition-colors duration-150 hover:text-text-primary active:text-text-primary"
            >
              {"<"} /blog
            </button>
            <p className="mt-6 font-mono text-body-2-medium text-text-tertiary">{post.date} · 3 min de leitura</p>
            <h1 className="mt-2 text-display-3-bold">{post.title}</h1>
            <p className="mt-4 border-s-2 border-accent-500 ps-4 text-body-regular text-text-secondary">{post.excerpt}</p>
          </Reveal>
          <div className="mt-10 space-y-8 border-t border-separator-border pt-10">
            {post.blocks.map((b, i) => (
              <Reveal key={i}>
                {b.h && (
                  <h2 className="text-title-3-semibold">
                    <span className="mr-2 font-mono text-body-2-medium text-text-tertiary">{String(i + 1).padStart(2, "0")}.</span>
                    {b.h}
                  </h2>
                )}
                <p className={b.h ? "mt-3 text-body-regular leading-7 text-text-secondary" : "text-body-regular leading-7 text-text-secondary"}>
                  {b.p}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 rounded-3xl bg-accent-500 p-8 text-white">
              <p className="text-headline-medium">Quer aplicar isso no seu funil?</p>
              <p className="mt-1 text-body-regular text-white/85">Me chama e a gente olha seus números juntos.</p>
              <div className="mt-5">
                <Button variant="secondary" leadingIcon={RiMailLine} onClick={() => window.open(LINKS.whatsapp, "_blank")}>
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

export function Contato() {
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="contato" />
      <main className="mx-auto max-w-6xl px-6">
        <section className="pb-8 pt-16 md:pt-24">
          <Reveal>
            <p className="font-mono text-body-2-medium text-text-tertiary">01. contato</p>
            <h1 className="mt-2 max-w-3xl text-display-1-bold">Fala comigo.</h1>
            <p className="mt-4 max-w-2xl text-body-regular text-text-secondary">
              Projetos, parcerias ou uma vaga onde marketing e tecnologia se encontram.
              O caminho mais rápido é o WhatsApp.
            </p>
          </Reveal>
        </section>

        <section className="grid gap-4 pb-20 md:grid-cols-2 md:pb-24">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-3xl bg-accent-500 p-8 text-white md:p-10">
              <p className="font-mono text-body-2-medium text-white/70">resposta em até 24h</p>
              <h2 className="mt-2 text-title-2-medium">Canal direto</h2>
              <p className="mt-2 font-mono text-display-3-bold">(85) 99134-4490</p>
              <p className="mt-2 text-body-regular text-white/85">
                Me chama com o que você precisa e o prazo. Volto com proposta e estimativa.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <Button variant="secondary" onClick={() => window.open(LINKS.whatsapp, "_blank")}>
                  Abrir WhatsApp
                </Button>
                <SocialButton brand="linkedin" href={LINKS.linkedin}>LinkedIn</SocialButton>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <SocialButton brand="github" href={LINKS.github}>GitHub</SocialButton>
                <SocialButton brand="x" href={LINKS.x}>X</SocialButton>
                <SocialButton brand="instagram" href={LINKS.instagram}>Instagram</SocialButton>
              </div>
              <p className="mt-6 font-mono text-body-2-medium text-white/70">
                prefere email? <a href={LINKS.email} className="underline underline-offset-4">contato@lucasfernandes.dev</a>
              </p>
            </div>
          </Reveal>

          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-border-button-default bg-background-primary-default p-8 md:p-10">
              <div>
                <p className="font-mono text-body-2-medium text-text-tertiary">~/ elsewhere</p>
                <h2 className="mt-2 text-title-3-semibold">Também me acha aqui</h2>
              </div>
              {[
                ["LinkedIn — 3.610 seguidores", LINKS.linkedin],
                ["GitHub — código e projetos", LINKS.github],
                ["X — bastidores", LINKS.x],
                ["Instagram — dia a dia", LINKS.instagram],
              ].map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between border-b border-separator-border py-4 text-body-medium transition-colors duration-150 hover:text-text-primary active:text-text-primary"
                >
                  {label}
                  <span className="font-mono text-text-tertiary">↗</span>
                </a>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

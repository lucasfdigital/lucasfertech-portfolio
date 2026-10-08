import { RiArrowRightUpLine } from "@remixicon/react";
import { Badge } from "@/components/base/badges/badge";
import { TOOLS } from "../content";
import { Eyebrow, Reveal } from "../App";
import { CtaBand, SiteFooter, SiteNav } from "../chrome";

const CATS = [...new Set(TOOLS.map((t) => t.cat))];

export default function Ferramentas() {
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="ferramentas" />
      <main className="mx-auto max-w-6xl px-6">
        <section className="pb-8 pt-16 md:pt-24">
          <Reveal>
            <Eyebrow index="01" label="Ferramentas" />
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
              <p className="text-caption-1-semibold text-text-tertiary">{cat}</p>
            </Reveal>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {TOOLS.filter((t) => t.cat === cat).map((t) => (
                <Reveal key={t.name} className="h-full">
                  <article className="flex h-full flex-col rounded-3xl border border-border-button-default bg-background-primary-default p-6 transition-colors duration-150 hover:border-border-button-hover active:border-border-button-hover md:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-title-3-semibold">{t.name}</h2>
                      <Badge color="neutral">{t.cat}</Badge>
                    </div>
                    <p className="mt-2 flex-1 text-body-regular text-text-secondary">{t.desc}</p>
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener"
                      className="mt-5 inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
                    >
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
              <p className="text-headline-medium">A lista cresce toda semana.</p>
              <p className="mx-auto mt-2 max-w-md text-body-regular text-text-secondary">
                Uso ferramenta nova, testo na operação e só entra aqui o que sobrevive.
                Volta em breve pra ver mais.
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

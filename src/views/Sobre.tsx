"use client";

import { RiArrowRightUpLine, RiWhatsappLine } from "@remixicon/react";
import { Badge } from "@/components/base/badges/badge";
import { Button } from "@/components/base/buttons/button";
import { JOBS, LINKS } from "../content";
import { Marker, Reveal } from "../ui";
import { CtaBand, SiteFooter, SiteNav } from "../chrome";

const FACTS: [string, string][] = [
  ["Liderança técnica", "ESCALE BIZ"],
  ["Formação", "UNIFOR"],
  ["Certificados", "21"],
  ["Base", "Fortaleza, CE"],
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="sobre" />
      <main className="mx-auto max-w-6xl px-6">
        <section className="pb-8 pt-16 md:pt-24">
          <Reveal>
            <p className="font-mono text-body-2-medium text-text-tertiary">01. sobre</p>
            <h1 className="mt-2 max-w-3xl text-display-1-bold">
              Dev que entende de receita,
              <br />
              marketer que <Marker>escreve código</Marker>.
            </h1>
          </Reveal>
        </section>

        <section className="grid gap-10 pb-16 md:grid-cols-[1.6fr_1fr] md:pb-20">
          <Reveal className="space-y-5">
            <p className="text-body-regular leading-7 text-text-secondary">
              Passei os últimos anos no meio do funil de vendas, não só escrevendo código, mas entendendo
              de onde vem a receita. Comecei em Sales Ops, cuidando de CRM, KPIs e forecast, e fui
              empurrando a operação pra automação até o ponto em que <Marker>processo manual</Marker> deixou
              de fazer sentido.
            </p>
            <p className="text-body-regular leading-7 text-text-secondary">
              Hoje lidero desenvolvimento na ESCALE BIZ, onde cuido de CI/CD, deploys e da infraestrutura que
              sustenta o time. Em paralelo, atendo clientes com sites, automações e integrações, sempre com a
              mesma régua: entrega semanal, escopo claro e resultado que dá pra medir.
            </p>
            <p className="text-body-regular leading-7 text-text-secondary">
              Meu diferencial não é escolher entre marketing e tecnologia. É falar as duas línguas sem
              tradução no meio, o que encurta o caminho entre uma ideia de negócio e o sistema rodando em
              produção.
            </p>
          </Reveal>

          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-border-button-default bg-background-primary-default p-6 md:p-8">
              <p className="font-mono text-body-2-medium text-text-tertiary">~/ resumo</p>
              <dl className="mt-4 flex flex-col">
                {FACTS.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-separator-border py-3 last:border-0"
                  >
                    <dt className="text-body-regular text-text-secondary">{label}</dt>
                    <dd className="font-mono text-body-2-medium text-text-primary">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6">
                <Button
                  variant="secondary"
                  leadingIcon={RiWhatsappLine}
                  onClick={() => window.open(LINKS.whatsapp, "_blank")}
                >
                  Conversar comigo
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="pb-20 md:pb-24">
          <Reveal>
            <p className="font-mono text-body-2-medium text-text-tertiary">02. trajetória</p>
            <h2 className="mt-2 text-display-3-bold">Onde eu já estive.</h2>
          </Reveal>

          <div className="mt-8 flex flex-col">
            {JOBS.map((j) => (
              <Reveal key={j.title}>
                <article className="grid gap-4 border-t border-separator-border py-6 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-6">
                  <span
                    className={`inline-flex w-fit items-center justify-center rounded-xl px-3 py-1 font-mono text-body-2-medium ${j.tileCls}`}
                  >
                    {j.tile}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-title-3-semibold">{j.title}</h3>
                      <Badge color={j.status.primary ? "primary" : "neutral"}>{j.status.label}</Badge>
                    </div>
                    <p className="mt-2 max-w-2xl text-body-regular text-text-secondary">{j.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {j.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-separator-border px-3 py-1 font-mono text-caption-1-medium text-text-tertiary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-mono text-body-2-medium text-text-tertiary md:text-end">{j.foot}</span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
            >
              Ver trajetória completa no LinkedIn
              <RiArrowRightUpLine className="size-4" aria-hidden />
            </a>
          </Reveal>
        </section>
      </main>
      <CtaBand />
      <SiteFooter />
    </div>
  );
}

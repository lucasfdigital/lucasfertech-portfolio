"use client";

import { RiLineChartLine, RiMegaphoneLine, RiRobot2Line, RiWhatsappLine, type RemixiconComponentType } from "@remixicon/react";
import { Button } from "@/components/base/buttons/button";
import { LINKS, SERVICES } from "../content";
import { Reveal } from "../ui";
import { CtaBand, SiteFooter, SiteNav } from "../chrome";

const ICONS: Record<string, RemixiconComponentType> = {
  megaphone: RiMegaphoneLine,
  chart: RiLineChartLine,
  robot: RiRobot2Line,
};

const PROCESS: [string, string, string][] = [
  ["01", "Diagnóstico", "Entendo o funil, os números e onde está o gargalo antes de propor qualquer coisa."],
  ["02", "Plano", "Escopo fechado, prioridades e uma estimativa honesta de prazo."],
  ["03", "Execução", "Entregas semanais, com você acompanhando a evolução em tempo real."],
  ["04", "Otimização", "Medição, ajuste e documentação pra operação continuar sem depender de mim."],
];

export default function Servicos() {
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="servicos" />
      <main className="mx-auto max-w-6xl px-6">
        <section className="pb-8 pt-16 md:pt-24">
          <Reveal>
            <p className="font-mono text-body-2-medium text-text-tertiary">01. serviços</p>
            <h1 className="mt-2 max-w-3xl text-display-1-bold">Atenção vira receita.</h1>
            <p className="mt-4 max-w-2xl text-body-regular text-text-secondary">
              Três frentes que se conectam: atrair as pessoas certas, crescer com dados e tirar o trabalho
              manual do caminho. Você escolhe onde começar.
            </p>
          </Reveal>
        </section>

        <section className="grid gap-4 pb-16 md:grid-cols-3 md:pb-20">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] ?? RiRobot2Line;
            return (
              <Reveal key={s.title} className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-border-button-default bg-background-primary-default p-6 md:p-8">
                  <span className={`inline-flex size-11 items-center justify-center rounded-xl ${s.cardCls}`}>
                    <Icon className={`size-5 ${s.titleCls}`} aria-hidden />
                  </span>
                  <h2 className="mt-5 text-title-2-medium">{s.title}</h2>
                  <p className="mt-2 flex-1 text-body-regular text-text-secondary">{s.desc}</p>
                  <ul className="mt-5 flex flex-col gap-2 border-t border-separator-border pt-5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-body-regular text-text-secondary">
                        <span className="font-mono text-body-2-medium text-text-tertiary">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </section>

        <section className="pb-20 md:pb-24">
          <Reveal>
            <p className="font-mono text-body-2-medium text-text-tertiary">02. como funciona</p>
            <h2 className="mt-2 text-display-3-bold">Do primeiro papo ao sistema rodando.</h2>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {PROCESS.map(([step, title, desc]) => (
              <Reveal key={step}>
                <div className="rounded-3xl border border-border-button-default bg-background-primary-default p-6 md:p-8">
                  <p className="font-mono text-body-2-medium text-text-placeholder">{step}</p>
                  <h3 className="mt-2 text-title-3-semibold">{title}</h3>
                  <p className="mt-2 text-body-regular text-text-secondary">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 rounded-3xl bg-accent-500 p-8 text-white md:p-10">
              <p className="text-headline-medium">Não sabe por onde começar?</p>
              <p className="mt-1 max-w-xl text-body-regular text-white/85">
                Me conta o objetivo e o prazo. Eu volto com uma proposta de escopo e estimativa, sem
                enrolação.
              </p>
              <div className="mt-5">
                <Button
                  variant="secondary"
                  leadingIcon={RiWhatsappLine}
                  onClick={() => window.open(LINKS.whatsapp, "_blank")}
                >
                  Pedir proposta
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <CtaBand />
      <SiteFooter />
    </div>
  );
}

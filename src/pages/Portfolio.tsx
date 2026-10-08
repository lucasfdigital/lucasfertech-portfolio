import { RiArrowRightUpLine, RiWhatsappLine } from "@remixicon/react";
import { Badge } from "@/components/base/badges/badge";
import { Chip } from "@/components/base/badges/chip";
import { Button } from "@/components/base/buttons/button";
import { CLIENTS, LINKS } from "../content";
import { Reveal } from "../App";
import { CtaBand, SiteFooter, SiteNav } from "../chrome";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="portfolio" />
      <main className="mx-auto max-w-6xl px-6">
        <section className="pb-8 pt-16 md:pt-24">
          <Reveal>
            <p className="font-mono text-body-2-medium text-text-tertiary">01. portfólio</p>
            <h1 className="mt-2 max-w-3xl text-display-1-bold">Sites de clientes.</h1>
            <p className="mt-4 max-w-2xl text-body-regular text-text-secondary">
              Sites institucionais, landings e e-commerces que tirei do papel — do escopo
              ao ar, com entrega semanal e 30 dias de suporte.
            </p>
          </Reveal>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="grid gap-4 md:grid-cols-2">
            {CLIENTS.map((c, i) => (
              <Reveal key={`${c.name}-${i}`} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border-button-default bg-background-primary-default transition-colors duration-150 hover:border-border-button-hover active:border-border-button-hover">
                  <div className="flex items-center gap-3 border-b border-separator-border px-6 py-3">
                    <span className="truncate font-mono text-body-2-medium text-text-tertiary">
                      {c.url ? c.url.replace("https://", "") : "em-breve.lucasfer.tech"}
                    </span>
                    <span className="ms-auto shrink-0">
                      <Badge color={c.status.primary ? "primary" : "neutral"}>{c.status.label}</Badge>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="font-mono text-body-2-medium text-text-tertiary">projeto_0{i + 1}</p>
                    <h2 className="mt-1 text-title-2-medium">{c.name}</h2>
                    <p className="mt-2 flex-1 text-body-regular text-text-secondary">{c.desc}</p>
                    {c.stack.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {c.stack.map((s) => (
                          <Chip key={s} variant="caption">{s}</Chip>
                        ))}
                      </div>
                    )}
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener"
                        className="mt-6 inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 transition-colors duration-150 hover:text-text-primary hover:underline active:text-text-primary"
                      >
                        {c.cta ? "Quero o meu site" : "Visitar site"}
                        <RiArrowRightUpLine className="size-4" aria-hidden />
                      </a>
                    ) : (
                      <p className="mt-6 font-mono text-body-2-medium text-text-tertiary">{"// detalhes em breve"}</p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal className="h-full">
              <div className="flex h-full min-h-56 flex-col items-start justify-between gap-8 rounded-3xl bg-accent-500 p-6 text-white md:p-8">
                <div>
                  <p className="font-mono text-body-2-medium text-white/70">projeto_04</p>
                  <h2 className="mt-1 text-title-2-medium">Tem um site pra tirar do papel?</h2>
                  <p className="mt-2 text-body-regular text-white/85">
                    Escopo fechado em 24h. Me chama e o próximo card aqui é o seu.
                  </p>
                </div>
                <Button
                  variant="secondary"
                  leadingIcon={RiWhatsappLine}
                  onClick={() => window.open(LINKS.whatsapp, "_blank")}
                >
                  Chamar no WhatsApp
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <CtaBand />
      <SiteFooter />
    </div>
  );
}

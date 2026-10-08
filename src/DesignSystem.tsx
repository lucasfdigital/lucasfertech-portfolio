import { useEffect, useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine, RiMailLine } from "@remixicon/react";
import { Announcement } from "@/components/base/announcement/announcement";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badge";
import { Chip } from "@/components/base/badges/chip";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/social-button/social-button";
import { Tab, TabList, TabPanel, Tabs } from "@/components/base/tabs/tabs";
import { Eyebrow, Reveal } from "./App";

const ACCENT_STEPS = [
  "bg-accent-50", "bg-accent-100", "bg-accent-200", "bg-accent-300",
  "bg-accent-400", "bg-accent-500", "bg-accent-600", "bg-accent-700",
  "bg-accent-800", "bg-accent-900", "bg-accent-950",
];

const TYPE_SAMPLES = [
  ["text-title-1-medium", "Títulos de página / hero"],
  ["text-title-2-medium", "Títulos de seção"],
  ["text-title-3-semibold", "Títulos de card, logo"],
  ["text-headline-medium", "Destaques curtos"],
  ["text-body-medium", "Ações, links, navegação"],
  ["text-body-regular", "Parágrafos"],
  ["text-body-2-medium", "Metadados, prova social"],
  ["text-caption-1-semibold", "Eyebrows, rótulos"],
] as const;

const MOTION_ROWS: [string, string][] = [
  ["100ms", "Flips de micro-estado (underline de tab, troca de ícone)"],
  ["150ms", "O padrão: hover de cor, popover, dropdown, select"],
  ["200ms", "Tooltip, thumb de switch, tick de checkbox"],
  ["220–230ms", "Troca de label, saídas discretas"],
  ["300ms", "Modal abre/fecha, backdrop"],
  ["360–400ms", "Barras de gráfico, linhas entrando"],
];

function Section({ children }: { children: React.ReactNode }) {
  return <section className="py-16 md:py-20">{children}</section>;
}

export default function DesignSystem() {
  const [tab, setTab] = useState("todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <header className="sticky top-0 z-50 border-b border-separator-border bg-background-full/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a
            href="#/"
            className="inline-flex items-center gap-1 text-body-medium text-text-secondary transition-colors duration-150 hover:text-text-primary active:text-text-primary"
          >
            <RiArrowLeftLine className="size-4" aria-hidden />
            lucasfer.tech
          </a>
          <div className="flex items-center gap-2">
            <Badge color="primary">v1.0</Badge>
            <span className="hidden text-body-2-medium text-text-tertiary sm:inline">Design system</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="pb-14 pt-20 md:pt-28">
          <Reveal>
            <Eyebrow index="00" label="Design system" />
            <h1 className="mt-6 max-w-3xl text-title-1-medium">Um sistema, um craft.</h1>
            <p className="mt-5 max-w-2xl text-body-regular text-text-secondary">
              Marca, tokens, tipo, componentes vivos e movimento que regem este portfólio.
              Tudo construído sobre BoardUI — nenhum hex solto, nenhum componente fantasiado.
            </p>
            <p className="mt-6 font-mono text-body-2-medium text-text-tertiary">
              React 19 • Tailwind v4 • BoardUI 2026.10.3
            </p>
          </Reveal>
        </section>

        {/* 01 Marca */}
        <Section>
          <Reveal>
            <Eyebrow index="01" label="Marca" />
            <h2 className="mt-2 text-title-2-medium">A assinatura.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border-button-default bg-background-primary-default p-8">
                <p className="text-title-2-medium">lucasfer<span className="text-text-tertiary">.tech</span></p>
                <p className="mt-3 text-headline-medium">Código que vira produto.</p>
                <p className="mt-2 text-body-regular text-text-secondary">
                  A promessa em uma linha: nada de código por código. Tudo que sai daqui vira coisa usável.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-3xl border border-border-button-default bg-background-primary-default p-8">
                <p className="text-caption-1-semibold text-text-tertiary">Tom de voz</p>
                <ul className="mt-3 space-y-2 text-body-regular text-text-secondary">
                  <li>— Curto e direto. Frase longa é bug.</li>
                  <li>— Português, sem jargão importado à toa.</li>
                  <li>— Mostra, não adjetiva: número e link vencem "incrível".</li>
                </ul>
                <p className="mt-4 text-caption-1-semibold text-text-tertiary">Nunca</p>
                <p className="mt-1 text-body-regular text-text-secondary">Neon, glow, lorem ipsum, "soluções inovadoras".</p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* 02 Cores */}
        <Section>
          <Reveal>
            <Eyebrow index="02" label="Cores" />
            <h2 className="mt-2 text-title-2-medium">Só tokens semânticos.</h2>
            <p className="mt-3 max-w-lg text-body-regular text-text-secondary">
              Nenhuma cor é escolhida a olho: cada superfície abaixo usa o próprio token que documenta.
              O dark mode vem de graça via <span className="font-mono">.dark</span>.
            </p>
          </Reveal>

          <Reveal>
            <p className="mb-3 mt-10 text-caption-1-semibold text-text-tertiary">Texto</p>
            <div className="divide-y divide-separator-border rounded-3xl border border-border-button-default bg-background-primary-default">
              {[
                ["text-text-primary", "Primary — títulos e corpo principal"],
                ["text-text-secondary", "Secondary — parágrafos e descrições"],
                ["text-text-tertiary", "Tertiary — metadados, eyebrows, números"],
              ].map(([cls, label]) => (
                <p key={cls} className={`px-6 py-4 text-body-medium ${cls}`}>
                  {label} <span className="font-mono text-body-2-medium">({cls})</span>
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-3 mt-10 text-caption-1-semibold text-text-tertiary">Superfícies</p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-border-button-default bg-background-primary-default p-6">
                <p className="text-headline-medium">Primary</p>
                <p className="mt-1 font-mono text-body-2-medium text-text-tertiary">bg-background-primary-default</p>
              </div>
              <div className="rounded-3xl border border-border-button-default bg-background-secondary-default p-6">
                <p className="text-headline-medium">Secondary</p>
                <p className="mt-1 font-mono text-body-2-medium text-text-tertiary">bg-background-secondary-default</p>
              </div>
              <div className="rounded-3xl border border-separator-border bg-background-full p-6">
                <p className="text-headline-medium">Ground + hairline</p>
                <p className="mt-1 font-mono text-body-2-medium text-text-tertiary">bg-background-full / border-separator-border</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-3 mt-10 text-caption-1-semibold text-text-tertiary">Rampa de destaque (CTAs e seleção)</p>
            <div className="grid grid-cols-6 gap-2 md:grid-cols-11">
              {ACCENT_STEPS.map((cls, i) => (
                <div key={cls} className="flex flex-col gap-1">
                  <div className={`h-12 rounded-xl ${cls}`} />
                  <span className="font-mono text-body-2-medium text-text-tertiary">{[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950][i]}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-3 mt-10 text-caption-1-semibold text-text-tertiary">Status (chips)</p>
            <div className="flex flex-wrap gap-2">
              <Chip color="blue" variant="subtle">info</Chip>
              <Chip color="purple" variant="subtle">planejado</Chip>
              <Chip color="cyan" variant="subtle">em andamento</Chip>
              <Chip color="lime" variant="subtle">pronto</Chip>
              <Chip color="yellow" variant="subtle">atenção</Chip>
              <Chip color="orange" variant="subtle">urgente</Chip>
              <Chip color="rose" variant="subtle">bloqueado</Chip>
            </div>
          </Reveal>
        </Section>

        {/* 03 Tipografia */}
        <Section>
          <Reveal>
            <Eyebrow index="03" label="Tipografia" />
            <h2 className="mt-2 text-title-2-medium">Utilitários compostos, nunca empilhados.</h2>
            <p className="mt-3 max-w-lg text-body-regular text-text-secondary">
              Cada estilo abaixo é um utilitário só — tamanho, peso, altura e tracking juntos.
              Reconstruir com <span className="font-mono">text-sm font-medium</span> é proibido.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-8 divide-y divide-separator-border border-y border-separator-border">
              {TYPE_SAMPLES.map(([cls, use]) => (
                <div key={cls} className="grid gap-1 py-5 md:grid-cols-[1fr_240px] md:items-baseline">
                  <p className={cls}>Código que vira produto.</p>
                  <p className="font-mono text-body-2-medium text-text-tertiary">{cls} — {use}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* 04 Forma e espaço */}
        <Section>
          <Reveal>
            <Eyebrow index="04" label="Forma e espaço" />
            <h2 className="mt-2 text-title-2-medium">Raio diz hierarquia.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["rounded-3xl", "Cards e painéis"],
              ["rounded-xl", "Blocos internos"],
              ["rounded-md", "Inputs e linhas"],
              ["rounded-full", "Pills e badges"],
            ].map(([cls, label]) => (
              <Reveal key={cls}>
                <div className={`border border-border-button-default bg-background-primary-default p-6 ${cls}`}>
                  <div className="h-10 bg-background-secondary-default" />
                  <p className="mt-3 font-mono text-body-2-medium text-text-tertiary">{cls}</p>
                  <p className="text-body-2-medium text-text-secondary">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 max-w-lg text-body-regular text-text-secondary">
              Espaçamento na escala de 4px do Tailwind, com <span className="font-mono">gap</span> de flex/grid —
              nunca margem por filho.
            </p>
          </Reveal>
        </Section>

        {/* 05 Componentes */}
        <Section>
          <Reveal>
            <Eyebrow index="05" label="Componentes" />
            <h2 className="mt-2 text-title-2-medium">Vivos, instalados, sem sósia.</h2>
            <p className="mt-3 max-w-lg text-body-regular text-text-secondary">
              Tudo abaixo é o componente real do BoardUI, importado via <span className="font-mono">@/</span>.
              Se o registro já entrega, ninguém redesenha.
            </p>
          </Reveal>

          <Reveal>
            <p className="mb-3 mt-10 text-caption-1-semibold text-text-tertiary">Botões</p>
            <div className="flex flex-wrap items-center gap-2 rounded-3xl border border-border-button-default bg-background-primary-default p-6">
              <Button trailingIcon={RiArrowRightLine}>Primário</Button>
              <Button variant="secondary">Secundário</Button>
              <Button variant="ghost">Fantasma</Button>
              <Button variant="danger">Perigo</Button>
              <Button size="small">Pequeno</Button>
              <Button size="small" variant="secondary" leadingIcon={RiMailLine}>Com ícone</Button>
            </div>
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Reveal>
              <p className="mb-3 text-caption-1-semibold text-text-tertiary">Selos e chips</p>
              <div className="flex h-full flex-wrap content-start items-center gap-2 rounded-3xl border border-border-button-default bg-background-primary-default p-6">
                <Badge color="primary">Disponível</Badge>
                <Badge color="neutral">Rascunho</Badge>
                <Chip variant="subtle">React</Chip>
                <Chip variant="caption">v1.0</Chip>
              </div>
            </Reveal>
            <Reveal>
              <p className="mb-3 text-caption-1-semibold text-text-tertiary">Avatar</p>
              <div className="flex h-full flex-wrap items-center gap-3 rounded-3xl border border-border-button-default bg-background-primary-default p-6">
                <Avatar initials="LF" size="xs" />
                <Avatar initials="LF" size="sm" />
                <Avatar initials="LF" size="md" />
                <Avatar initials="LF" size="lg" />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <p className="mb-3 mt-4 text-caption-1-semibold text-text-tertiary">Sociais e abas</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-wrap gap-2 rounded-3xl border border-border-button-default bg-background-primary-default p-6">
                <SocialButton brand="github" href="https://github.com/lucasfdigital">GitHub</SocialButton>
                <SocialButton brand="linkedin" href="https://www.linkedin.com/in/lucasfia/">LinkedIn</SocialButton>
                <SocialButton brand="x" iconOnly href="https://x.com/lucasfertech" aria-label="X" />
                <SocialButton brand="instagram" iconOnly href="https://www.instagram.com/lucasfer.tech/" aria-label="Instagram" />
              </div>
              <div className="rounded-3xl border border-border-button-default bg-background-primary-default p-6">
                <Tabs selectedKey={tab} onSelectionChange={(k) => setTab(String(k))}>
                  <TabList aria-label="Filtro de exemplo">
                    <Tab id="todos" count={3}>Todos</Tab>
                    <Tab id="front" count={2}>Front</Tab>
                    <Tab id="back" count={1}>Back</Tab>
                  </TabList>
                  <TabPanel id="todos"><p className="text-body-2-medium text-text-secondary">Lista completa visível.</p></TabPanel>
                  <TabPanel id="front"><p className="text-body-2-medium text-text-secondary">Só front-end.</p></TabPanel>
                  <TabPanel id="back"><p className="text-body-2-medium text-text-secondary">Só back-end.</p></TabPanel>
                </Tabs>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-3 mt-4 text-caption-1-semibold text-text-tertiary">Aviso</p>
            <Announcement
              title="Regra de ouro do sistema"
              description="Se o BoardUI já entrega o componente, instalar vence redesenhar. Sempre."
              dismissible
            />
          </Reveal>
        </Section>

        {/* 06 Movimento */}
        <Section>
          <Reveal>
            <Eyebrow index="06" label="Movimento" />
            <h2 className="mt-2 text-title-2-medium">Rápido e sutil.</h2>
          </Reveal>
          <Reveal>
            <div className="mt-8 divide-y divide-separator-border rounded-3xl border border-border-button-default bg-background-primary-default">
              {MOTION_ROWS.map(([d, use]) => (
                <div key={d} className="grid grid-cols-[90px_1fr] gap-4 px-6 py-4">
                  <span className="font-mono text-body-medium">{d}</span>
                  <span className="text-body-regular text-text-secondary">{use}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-4 rounded-3xl border border-border-button-default bg-background-secondary-default p-8 text-center">
              <p className="text-headline-medium">Role até aqui e eu condensei no lugar:</p>
              <p className="mt-1 text-body-2-medium text-text-secondary">fade + scale 0.98 + blur 2px, 300ms ease-out — a entrada assinatura.</p>
            </div>
          </Reveal>
        </Section>

        {/* 07 Regras */}
        <Section>
          <Reveal>
            <Eyebrow index="07" label="Regras" />
            <h2 className="mt-2 text-title-2-medium">O que nunca passa no review.</h2>
          </Reveal>
          <Reveal>
            <ul className="mt-8 space-y-3 text-body-regular text-text-secondary">
              <li>— Cor fora de token (<span className="font-mono">text-gray-500</span>, hex solto): volta.</li>
              <li>— Tipo empilhado à mão em vez do utilitário composto: volta.</li>
              <li>— <span className="font-mono">dark:</span> com cor crua em vez de trocar o token: volta.</li>
              <li>— Classe concatenada na mão em vez de <span className="font-mono">cx()</span>: volta.</li>
              <li>— Ícone que não seja referência <span className="font-mono">@remixicon/react</span>: volta.</li>
            </ul>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-separator-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-body-2-medium text-text-tertiary">
          <p>© {new Date().getFullYear()} Lucas Fernandes — design system v1.0</p>
          <a href="#/" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Voltar ao site ↑</a>
        </div>
      </footer>
    </div>
  );
}

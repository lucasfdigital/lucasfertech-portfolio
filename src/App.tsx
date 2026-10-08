import { useState } from "react";
import {
  RiArrowRightLine,
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiCloudLine,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiInstagramLine,
  RiMailLine,
  RiRocketLine,
  RiServerLine,
  RiLayoutMasonryLine,
} from "@remixicon/react";
import { DirectionProvider } from "@/components/foundations/direction/direction";
import { Announcement } from "@/components/base/announcement/announcement";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badge";
import { Chip } from "@/components/base/badges/chip";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/social-button/social-button";
import { StatCards } from "@/components/application/dashboard/stat-cards";
import { Tab, TabList, TabPanel, Tabs } from "@/components/base/tabs/tabs";
import { cx } from "@/utils/cx";

const LINKS = {
  github: "https://github.com/lucasfdigital",
  linkedin: "https://www.linkedin.com/in/lucasfia/",
  x: "https://x.com/lucasfertech",
  instagram: "https://www.instagram.com/lucasfer.tech/",
  email: "mailto:contato@lucasfernandes.dev",
};

type Category = "frontend" | "backend" | "mobile";

const PROJECTS: { title: string; desc: string; stack: string[]; cat: Category; icon: typeof RiCodeSSlashLine }[] = [
  { title: "E-commerce Headless", desc: "Loja Next.js + Stripe com 98 no Lighthouse e checkout em 1 clique.", stack: ["Next.js", "Stripe"], cat: "frontend", icon: RiLayoutMasonryLine },
  { title: "Landing + Blog SEO", desc: "Site institucional + blog MDX com SEO 100, i18n e CMS headless.", stack: ["Next.js", "SEO"], cat: "frontend", icon: RiLayoutMasonryLine },
  { title: "Dashboard SaaS", desc: "Painel analytics React + FastAPI com realtime e export CSV/PDF.", stack: ["React", "Python"], cat: "backend", icon: RiServerLine },
  { title: "API + IA", desc: "API Node/Python com OpenAI: chatbot, resumos e automações.", stack: ["OpenAI", "Docker"], cat: "backend", icon: RiServerLine },
  { title: "Chat Realtime", desc: "Salas com Socket.io, upload de arquivos e presença online.", stack: ["Socket.io", "Redis"], cat: "backend", icon: RiServerLine },
  { title: "App Delivery", desc: "App com rastreio realtime, push notifications e pagamento.", stack: ["React Native", "Node"], cat: "mobile", icon: RiSmartphoneLine },
];

const SKILLS: { title: string; items: string[]; color: "blue" | "purple" | "cyan" }[] = [
  { title: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind"], color: "blue" },
  { title: "Backend & APIs", items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "GraphQL"], color: "purple" },
  { title: "Mobile & Cloud", items: ["React Native", "Flutter", "Docker", "AWS", "Vercel"], color: "cyan" },
];

function Shell() {
  const [tab, setTab] = useState("todos");
  const filtered = tab === "todos" ? PROJECTS : PROJECTS.filter((p) => p.cat === tab);

  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="pt-4">
          <Announcement
            title="Disponível para projetos — respondo em 24h"
            description="Freelas, MVP SaaS e apps mobile com React, Node, Python."
            actionLabel="Contrate-me"
            onAction={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
          />
        </div>

        <header className="flex items-center justify-between py-5">
          <a href="#inicio" className="text-title-3-semibold">
            lucasfer<span className="text-foreground-icon-quaternary">.tech</span>
          </a>
          <nav className="hidden items-center gap-6 text-body-medium text-text-secondary md:flex">
            <a href="#skills" className="hover:text-text-primary">Skills</a>
            <a href="#projetos" className="hover:text-text-primary">Projetos</a>
            <a href="#contato" className="hover:text-text-primary">Contato</a>
          </nav>
          <div className="flex items-center gap-2">
            <SocialButton brand="github" iconOnly href={LINKS.github} aria-label="GitHub de Lucas" />
            <SocialButton brand="linkedin" iconOnly href={LINKS.linkedin} aria-label="LinkedIn de Lucas" />
            <Button
              size="small"
              trailingIcon={RiArrowRightLine}
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contrate-me
            </Button>
          </div>
        </header>

        <section id="inicio" className="grid items-center gap-8 py-12 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Badge color="primary">Novo</Badge>
              <span className="text-body-medium text-text-secondary">Full Stack • React • Node • Python • Mobile</span>
            </div>
            <h1 className="text-title-1-medium">
              Olá, eu sou Lucas Fernandes. Shippo produtos que funcionam.
            </h1>
            <p className="text-body-regular text-text-secondary">
              Transformo ideias em web apps, APIs e apps mobile rápidos e escaláveis.
              Escopo claro, entrega contínua e código limpo.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button trailingIcon={RiArrowRightLine} onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}>
                Ver projetos
              </Button>
              <Button variant="secondary" leadingIcon={RiMailLine} onClick={() => (window.location.href = LINKS.email)}>
                Entrar em contato
              </Button>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex">
                <Avatar initials="LF" size="md" />
                <Avatar initials="＋" size="md" className="ms-[-8px]" />
              </div>
              <p className="text-body-2-medium text-text-secondary">20+ projetos • 4.9/5 avaliação média</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border-button-default bg-background-primary-default p-4">
            <StatCards
              columns={2}
              stats={[
                { icon: RiCodeSSlashLine, label: "Anos de experiência", value: "3+", delta: "+1 este ano", deltaColor: "lime" },
                { icon: RiRocketLine, label: "Projetos entregues", value: "20+", delta: "+18.2%", deltaColor: "lime" },
                { icon: RiCloudLine, label: "Deploys / CI-CD", value: "120+", delta: "99% uptime", deltaColor: "neutral" },
                { icon: RiSmartphoneLine, label: "Apps publicados", value: "6", delta: "iOS + Android", deltaColor: "neutral" },
              ]}
            />
          </div>
        </section>

        <section id="skills" className="py-10">
          <p className="text-caption-1-semibold text-text-tertiary">{"// skills"}</p>
          <h2 className="text-title-2-medium">Minha stack</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {SKILLS.map((g) => (
              <div key={g.title} className="rounded-3xl border border-border-button-default bg-background-primary-default p-5">
                <h3 className="text-headline-medium">{g.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Chip key={s} color={g.color} variant="subtle">{s}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projetos" className="py-10">
          <p className="text-caption-1-semibold text-text-tertiary">{"// projetos"}</p>
          <h2 className="text-title-2-medium">Trabalhos em destaque</h2>
          <Tabs selectedKey={tab} onSelectionChange={(k) => setTab(String(k))} className="mt-4">
            <TabList aria-label="Filtrar projetos">
              <Tab id="todos" count={PROJECTS.length}>Todos</Tab>
              <Tab id="frontend" count={PROJECTS.filter((p) => p.cat === "frontend").length}>Frontend</Tab>
              <Tab id="backend" count={PROJECTS.filter((p) => p.cat === "backend").length}>Backend</Tab>
              <Tab id="mobile" count={PROJECTS.filter((p) => p.cat === "mobile").length}>Mobile</Tab>
            </TabList>
            <TabPanel id="todos" />
            <TabPanel id="frontend" />
            <TabPanel id="backend" />
            <TabPanel id="mobile" />
          </Tabs>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.title} className="flex flex-col gap-2 rounded-3xl border border-border-button-default bg-background-primary-default p-5">
                <p.icon className="size-5 text-foreground-icon-primary" aria-hidden />
                <h3 className="text-headline-medium">{p.title}</h3>
                <p className="flex-1 text-body-regular text-text-secondary">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Chip key={s} variant="caption">{s}</Chip>
                  ))}
                </div>
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener"
                  className={cx("text-body-medium text-text-secondary underline-offset-4 hover:underline")}
                >
                  Ver código ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="py-10">
          <div className="rounded-3xl border border-border-button-default bg-background-secondary-default p-8">
            <p className="text-caption-1-semibold text-text-tertiary">{"// contato"}</p>
            <h2 className="text-title-2-medium">Vamos construir algo incrível?</h2>
            <p className="mt-2 text-body-regular text-text-secondary">
              Freelas, CLT remota ou parceria. Respondo em até 24h.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <SocialButton brand="github" href={LINKS.github}>GitHub</SocialButton>
              <SocialButton brand="linkedin" href={LINKS.linkedin}>LinkedIn</SocialButton>
              <SocialButton brand="x" href={LINKS.x}>X</SocialButton>
              <SocialButton brand="instagram" href={LINKS.instagram}>Instagram</SocialButton>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button leadingIcon={RiMailLine} onClick={() => (window.location.href = LINKS.email)}>
                contato@lucasfernandes.dev
              </Button>
              <Button variant="ghost" leadingIcon={RiGithubFill} onClick={() => window.open(LINKS.github, "_blank")}>
                github.com/lucasfdigital
              </Button>
            </div>
            <div className="mt-4 hidden items-center gap-2 text-text-tertiary">
              <RiLinkedinFill className="size-4" aria-hidden />
              <RiTwitterXFill className="size-4" aria-hidden />
              <RiInstagramLine className="size-4" aria-hidden />
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-separator-border py-6 text-body-2-medium text-text-tertiary">
          <p>© {new Date().getFullYear()} Lucas Fernandes — feito com BoardUI.</p>
          <div className="flex gap-4">
            <a href={LINKS.github} target="_blank" rel="noopener" className="hover:text-text-primary">GitHub</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener" className="hover:text-text-primary">LinkedIn</a>
            <a href="#inicio" className="hover:text-text-primary">Topo ↑</a>
          </div>
        </footer>
      </div>
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

import { useState } from "react";
import { RiCloseLine, RiMenuLine, RiWhatsappLine } from "@remixicon/react";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/social-button/social-button";
import { LINKS } from "./content";
import { Marker, Reveal } from "./App";

export type NavKey = "home" | "portfolio" | "ferramentas" | "blog" | "contato";

const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Início", href: "#/" },
  { key: "portfolio", label: "Portfólio", href: "#/portfolio" },
  { key: "ferramentas", label: "Ferramentas", href: "#/ferramentas" },
  { key: "blog", label: "Blog", href: "#/blog" },
  { key: "contato", label: "Contato", href: "#/contato" },
];

export function go(href: string) {
  window.location.hash = href.replace(/^#/, "");
}

export function SiteNav({ active }: { active: NavKey }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-separator-border bg-background-full/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#/" className="text-title-3-semibold">
          lucasfer<span className="text-text-tertiary">.tech</span>
        </a>
        <nav className="hidden items-center gap-7 text-body-medium text-text-secondary md:flex">
          {NAV.map((n) => (
            <a
              key={n.key}
              href={n.href}
              aria-current={active === n.key ? "page" : undefined}
              className={
                active === n.key
                  ? "text-text-primary"
                  : "transition-colors duration-150 hover:text-text-primary active:text-text-primary"
              }
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <SocialButton brand="linkedin" iconOnly href={LINKS.linkedin} aria-label="LinkedIn de Lucas Fernandes" />
          <Button size="small" leadingIcon={RiWhatsappLine} onClick={() => window.open(LINKS.whatsapp, "_blank")} className="hidden sm:inline-flex">
            Fale comigo
          </Button>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-xl border border-border-button-default text-text-primary md:hidden"
          >
            {open ? <RiCloseLine className="size-5" aria-hidden /> : <RiMenuLine className="size-5" aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-separator-border bg-background-full px-6 py-4 md:hidden">
          {NAV.map((n) => (
            <a
              key={n.key}
              href={n.href}
              onClick={() => setOpen(false)}
              aria-current={active === n.key ? "page" : undefined}
              className={
                active === n.key
                  ? "block py-3 text-body-medium text-text-primary"
                  : "block py-3 text-body-medium text-text-secondary"
              }
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function CtaBand() {
  return (
    <div className="dark">
      <div className="bg-background-full text-text-primary">
        <div className="mx-auto max-w-6xl px-6">
          <section className="py-20 md:py-24">
            <Reveal>
              <h2 className="max-w-3xl text-display-2-bold">
                Vamos transformar atenção em <Marker>receita.</Marker>
              </h2>
              <p className="mt-4 max-w-lg text-body-regular text-text-secondary">
                Projetos, parcerias ou uma vaga onde marketing e tecnologia se encontram.
                Chama no WhatsApp — respondo rápido.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <Button leadingIcon={RiWhatsappLine} onClick={() => window.open(LINKS.whatsapp, "_blank")}>
                  Chamar no WhatsApp
                </Button>
                <SocialButton brand="linkedin" href={LINKS.linkedin}>LinkedIn</SocialButton>
                <SocialButton brand="github" href={LINKS.github}>GitHub</SocialButton>
              </div>
            </Reveal>
          </section>
        </div>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-accent-500">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-title-3-semibold">lucasfer<span className="text-text-tertiary">.tech</span></p>
          <p className="mt-2 max-w-xs text-body-2-medium text-text-secondary">
            Dev · Growth · Automação · IA. Atenção vira receita.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-caption-1-semibold text-text-tertiary">Site</p>
            <div className="mt-3 flex flex-col gap-2 text-body-medium text-text-secondary">
              {NAV.map((n) => (
                <a key={n.key} href={n.href} className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">
                  {n.label}
                </a>
              ))}
              <a href="#/design" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Design system</a>
            </div>
          </div>
          <div>
            <p className="text-caption-1-semibold text-text-tertiary">Social</p>
            <div className="mt-3 flex flex-col gap-2 text-body-medium text-text-secondary">
              <a href={LINKS.linkedin} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">LinkedIn</a>
              <a href={LINKS.github} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">GitHub</a>
              <a href={LINKS.x} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">X</a>
              <a href={LINKS.instagram} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Instagram</a>
            </div>
          </div>
          <div>
            <p className="text-caption-1-semibold text-text-tertiary">Contato</p>
            <div className="mt-3 flex flex-col gap-2 text-body-medium text-text-secondary">
              <a href={LINKS.whatsapp} target="_blank" rel="noopener" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">WhatsApp</a>
              <a href={LINKS.email} className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Email</a>
              <a href="#/" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Início ↑</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-separator-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-body-2-medium text-text-tertiary">
          <p>© {new Date().getFullYear()} Lucas Fernandes</p>
          <p>Feito com BoardUI</p>
        </div>
      </div>
    </footer>
  );
}

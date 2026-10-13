"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiCloseLine, RiMenuLine, RiWhatsappLine } from "@remixicon/react";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/social-button/social-button";
import { LINKS } from "./content";
import { Marker, Reveal } from "./ui";

export type NavKey =
  | "home"
  | "sobre"
  | "cases"
  | "ferramentas"
  | "servicos"
  | "blog"
  | "contato";

const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Início", href: "/" },
  { key: "sobre", label: "Sobre", href: "/sobre" },
  { key: "cases", label: "Cases", href: "/cases" },
  { key: "ferramentas", label: "Ferramentas", href: "/ferramentas" },
  { key: "servicos", label: "Serviços", href: "/servicos" },
  { key: "blog", label: "Blog", href: "/blog" },
  { key: "contato", label: "Contato", href: "/contato" },
];

function deriveNavKey(pathname: string): NavKey {
  if (pathname.startsWith("/sobre")) return "sobre";
  if (pathname.startsWith("/cases")) return "cases";
  if (pathname.startsWith("/ferramentas")) return "ferramentas";
  if (pathname.startsWith("/servicos")) return "servicos";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/contato")) return "contato";
  return "home";
}

export function SiteNav({ active }: { active?: NavKey }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = active ?? deriveNavKey(pathname);
  return (
    <header className="sticky top-0 z-50 border-b border-separator-border bg-background-full/80 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-body-bold text-text-primary">
          {"<"}lf<span className="text-text-tertiary">.tech /</span>{">"}
        </Link>
        <nav className="hidden items-center gap-6 text-body-medium text-text-secondary lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.key}
              href={n.href}
              aria-current={current === n.key ? "page" : undefined}
              className={
                current === n.key
                  ? "text-text-primary"
                  : "transition-colors duration-150 hover:text-text-primary active:text-text-primary"
              }
            >
              {n.label}
            </Link>
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
            className="grid size-9 place-items-center rounded-xl border border-border-button-default text-text-primary lg:hidden"
          >
            {open ? <RiCloseLine className="size-5" aria-hidden /> : <RiMenuLine className="size-5" aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-separator-border bg-background-full px-6 py-4 lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.key}
              href={n.href}
              onClick={() => setOpen(false)}
              aria-current={current === n.key ? "page" : undefined}
              className={
                current === n.key
                  ? "block py-3 text-body-medium text-text-primary"
                  : "block py-3 text-body-medium text-text-secondary"
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function CtaBand() {
  return (
    <div className="border-t border-separator-border bg-background-secondary-default">
      <div className="mx-auto max-w-6xl px-6">
        <section className="py-20 md:py-24">
          <Reveal>
            <p className="font-mono text-body-2-medium text-text-tertiary">04. Qual é o próximo passo?</p>
            <h2 className="mt-3 max-w-3xl text-display-2-bold">
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
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-separator-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-body-bold text-text-primary">{"<"}lf.tech /{">"}</p>
          <p className="mt-2 max-w-xs text-body-2-medium text-text-secondary">
            Dev · Growth · Automação · IA. Atenção vira receita.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-caption-1-semibold text-text-tertiary">Site</p>
            <div className="mt-3 flex flex-col gap-2 text-body-medium text-text-secondary">
              {NAV.map((n) => (
                <Link key={n.key} href={n.href} className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">
                  {n.label}
                </Link>
              ))}
              <Link href="/design" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Design system</Link>
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
              <Link href="/" className="transition-colors duration-150 hover:text-text-primary active:text-text-primary">Início ↑</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-separator-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-body-2-medium text-text-tertiary">
          <p>© {new Date().getFullYear()} Lucas Fernandes</p>
          <p className="font-mono">Feito com BoardUI · dark por padrão</p>
        </div>
      </div>
    </footer>
  );
}

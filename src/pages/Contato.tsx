import { useState } from "react";
import { RiMailLine, RiWhatsappLine } from "@remixicon/react";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/social-button/social-button";
import { LINKS } from "../content";
import { Eyebrow, Reveal } from "../App";
import { SiteFooter, SiteNav } from "../chrome";

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato pelo site — ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:contato@lucasfernandes.dev?subject=${subject}&body=${body}`;
  }

  const inputCls =
    "w-full rounded-xl border border-border-button-default bg-background-full px-4 py-3 text-body-medium text-text-primary outline-none transition-colors duration-150 placeholder:text-text-placeholder focus:border-border-button-hover";

  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="contato" />
      <main className="mx-auto max-w-6xl px-6">
        <section className="pb-8 pt-16 md:pt-24">
          <Reveal>
            <Eyebrow index="01" label="Contato" />
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
              <h2 className="text-title-2-medium">Resposta rápida</h2>
              <p className="mt-2 text-body-regular text-white/85">
                Me chama no WhatsApp com o que você precisa e o prazo. Respondo em até 24h com proposta e estimativa.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <Button variant="secondary" leadingIcon={RiWhatsappLine} onClick={() => window.open(LINKS.whatsapp, "_blank")}>
                  (85) 99134-4490
                </Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <SocialButton brand="linkedin" href={LINKS.linkedin}>LinkedIn</SocialButton>
                <SocialButton brand="github" href={LINKS.github}>GitHub</SocialButton>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <SocialButton brand="x" href={LINKS.x}>X</SocialButton>
                <SocialButton brand="instagram" href={LINKS.instagram}>Instagram</SocialButton>
              </div>
            </div>
          </Reveal>

          <Reveal className="h-full">
            <form onSubmit={send} className="flex h-full flex-col gap-3 rounded-3xl border border-border-button-default bg-background-primary-default p-8 md:p-10">
              <h2 className="text-title-3-semibold">Ou deixa recado</h2>
              <p className="text-body-2-medium text-text-secondary">Abre seu app de email com tudo preenchido.</p>
              <label className="mt-2 flex flex-col gap-1.5">
                <span className="text-caption-1-semibold text-text-tertiary">Seu nome</span>
                <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Como te chamo?" className={inputCls} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-caption-1-semibold text-text-tertiary">Seu email</span>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="voce@empresa.com" className={inputCls} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-caption-1-semibold text-text-tertiary">Mensagem</span>
                <textarea required rows={5} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="O que você precisa e pra quando?" className={inputCls} />
              </label>
              <Button type="submit" leadingIcon={RiMailLine} className="mt-2">
                Enviar por email
              </Button>
            </form>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

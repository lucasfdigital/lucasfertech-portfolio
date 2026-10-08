import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { POSTS } from "../content";
import { Eyebrow, Reveal } from "../App";
import { CtaBand, SiteFooter, SiteNav, go } from "../chrome";

export function BlogList() {
  return (
    <div className="min-h-screen bg-background-full text-text-primary">
      <SiteNav active="blog" />
      <main className="mx-auto max-w-6xl px-6">
        <section className="pb-8 pt-16 md:pt-24">
          <Reveal>
            <Eyebrow index="01" label="Blog" />
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
                  <p className="text-body-2-medium text-text-tertiary">{p.date}</p>
                  <p className="mt-2 text-title-2-medium">{p.title}</p>
                  <p className="mt-2 max-w-2xl text-body-regular text-text-secondary">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-body-medium text-text-secondary">
                    Ler texto
                    <RiArrowRightLine className="size-4" aria-hidden />
                  </span>
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
          <p className="text-title-2-medium">Texto não encontrado.</p>
          <button
            type="button"
            onClick={() => go("#/blog")}
            className="mt-4 inline-flex items-center gap-1 text-body-medium text-text-secondary underline-offset-4 hover:underline"
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
              className="inline-flex items-center gap-1 text-body-medium text-text-secondary transition-colors duration-150 hover:text-text-primary active:text-text-primary"
            >
              <RiArrowLeftLine className="size-4" aria-hidden />
              Todos os textos
            </button>
            <p className="mt-6 text-body-2-medium text-text-tertiary">{post.date}</p>
            <h1 className="mt-2 text-display-3-bold">{post.title}</h1>
            <p className="mt-4 text-body-regular text-text-secondary">{post.excerpt}</p>
          </Reveal>
          <div className="mt-10 space-y-8 border-t border-separator-border pt-10">
            {post.blocks.map((b, i) => (
              <Reveal key={i}>
                {b.h && <h2 className="text-title-3-semibold">{b.h}</h2>}
                <p className={b.h ? "mt-3 text-body-regular text-text-secondary" : "text-body-regular text-text-secondary"}>
                  {b.p}
                </p>
              </Reveal>
            ))}
          </div>
        </article>
      </main>
      <CtaBand />
      <SiteFooter />
    </div>
  );
}

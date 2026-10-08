import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import { DirectionProvider } from "@/components/foundations/direction/direction";
import { cx } from "@/utils/cx";

const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Ferramentas = lazy(() => import("./pages/Pages").then((m) => ({ default: m.Ferramentas })));
const Blog = lazy(() => import("./pages/Pages").then((m) => ({ default: m.BlogList })));
const BlogPost = lazy(() => import("./pages/Pages").then((m) => ({ default: m.BlogPost })));
const Contato = lazy(() => import("./pages/Pages").then((m) => ({ default: m.Contato })));
const DesignSystem = lazy(() => import("./DesignSystem"));

/** Eyebrow numerado estilo ArtCraft: 01/Rótulo. */
export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="text-caption-1-semibold text-text-tertiary">
      {index}/{label}
    </p>
  );
}

/** Entrada padrão BoardUI: fade + scale + blur, uma vez, com reduced-motion. */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={cx(
        "transition duration-300 ease-out will-change-[opacity,transform,filter]",
        shown ? "scale-100 opacity-100 blur-0" : "scale-[0.98] opacity-0 blur-[2px]",
        "motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:blur-0 motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Palavra com marca-texto na cor de destaque. */
export function Marker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-xl bg-accent-400 px-3 text-white">
      {children}
    </span>
  );
}

type View =
  | { name: "home" }
  | { name: "portfolio" }
  | { name: "ferramentas" }
  | { name: "blog" }
  | { name: "post"; slug: string }
  | { name: "contato" }
  | { name: "design" };

const TITLES: Record<View["name"], string> = {
  home: "Lucas Fernandes — Dev · Growth · Automação · IA",
  portfolio: "Portfólio — lucasfer.tech",
  ferramentas: "Ferramentas — lucasfer.tech",
  blog: "Blog — lucasfer.tech",
  post: "Blog — lucasfer.tech",
  contato: "Contato — lucasfer.tech",
  design: "Design System — lucasfer.tech",
};

function getView(): View {
  if (typeof window === "undefined") return { name: "home" };
  const hash = window.location.hash.replace(/^#/, "");
  if (hash === "/design" || window.location.pathname.replace(/\/$/, "") === "/design") {
    return { name: "design" };
  }
  const parts = hash.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  if (parts[0] === "portfolio") return { name: "portfolio" };
  if (parts[0] === "ferramentas") return { name: "ferramentas" };
  if (parts[0] === "blog" && parts[1]) return { name: "post", slug: parts[1] };
  if (parts[0] === "blog") return { name: "blog" };
  if (parts[0] === "contato") return { name: "contato" };
  return { name: "home" };
}

function sameView(a: View, b: View): boolean {
  return a.name === b.name && (a.name !== "post" || (b as { slug: string }).slug === (a as { slug: string }).slug);
}

export default function App() {
  const [view, setView] = useState<View>(getView);

  useEffect(() => {
    const onChange = () => {
      setView((prev) => {
        const next = getView();
        if (!sameView(prev, next)) window.scrollTo(0, 0);
        return next;
      });
    };
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);

  useEffect(() => {
    document.title = TITLES[view.name];
  }, [view]);

  return (
    <DirectionProvider locale="pt-BR">
      <Suspense
        fallback={
          <div className="grid min-h-screen place-items-center bg-background-full">
            <p className="text-body-medium text-text-tertiary">Carregando…</p>
          </div>
        }
      >
        {view.name === "home" && <Home />}
        {view.name === "portfolio" && <Portfolio />}
        {view.name === "ferramentas" && <Ferramentas />}
        {view.name === "blog" && <Blog />}
        {view.name === "post" && <BlogPost slug={view.slug} />}
        {view.name === "contato" && <Contato />}
        {view.name === "design" && <DesignSystem />}
      </Suspense>
    </DirectionProvider>
  );
}

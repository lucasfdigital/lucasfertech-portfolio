"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { cx } from "@/utils/cx";

/** Eyebrow numerado estilo ArtCraft: 01/Rótulo. */
export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="font-mono text-caption-1-semibold uppercase tracking-wider text-text-tertiary">
      <span className="text-text-placeholder">{index}</span>
      <span className="mx-1.5">/</span>
      {label}
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

/** Navegação programática (substitui o antigo `go()` de hash). */
export function useGo() {
  const router = useRouter();
  return (href: string) => router.push(href.replace(/^#/, ""));
}

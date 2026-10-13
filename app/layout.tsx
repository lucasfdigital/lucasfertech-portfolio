import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DirectionProvider } from "@/components/foundations/direction/direction";
import "@/styles/globals.css";
import "@/src/ticker.css";

export const metadata: Metadata = {
  title: "Lucas Fernandes — Dev · Growth · Automação · IA",
  description:
    "Lucas Fernandes — Dev, Growth, Automação e IA. Líder de Desenvolvimento na ESCALE BIZ. Atenção vira receita.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" dir="ltr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400..700&family=Geist+Mono:wght@400..500&display=swap"
        />
      </head>
      <body>
        <DirectionProvider locale="pt-BR">{children}</DirectionProvider>
      </body>
    </html>
  );
}

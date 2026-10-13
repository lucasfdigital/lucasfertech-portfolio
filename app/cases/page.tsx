import type { Metadata } from "next";
import Portfolio from "@/src/views/Portfolio";

export const metadata: Metadata = {
  title: "Cases — Lucas Fernandes",
  description:
    "Sites institucionais, landings e e-commerces que tirei do papel, do escopo ao ar, com entrega semanal e 30 dias de suporte.",
};

export default function Page() {
  return <Portfolio />;
}

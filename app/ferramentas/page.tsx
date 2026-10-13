import type { Metadata } from "next";
import { Ferramentas } from "@/src/views/Pages";

export const metadata: Metadata = {
  title: "Ferramentas — Lucas Fernandes",
  description:
    "Minha caixa de ferramenta: apps gratuitos que uso ou recomendo, do banco de dados ao deploy.",
};

export default function Page() {
  return <Ferramentas />;
}

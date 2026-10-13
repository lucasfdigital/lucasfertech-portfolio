import type { Metadata } from "next";
import Sobre from "@/src/views/Sobre";

export const metadata: Metadata = {
  title: "Sobre — Lucas Fernandes",
  description:
    "Dev que entende de receita, marketer que escreve código. Líder de Desenvolvimento na ESCALE BIZ, formado na UNIFOR.",
};

export default function Page() {
  return <Sobre />;
}

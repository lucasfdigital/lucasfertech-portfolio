import type { Metadata } from "next";
import Servicos from "@/src/views/Servicos";

export const metadata: Metadata = {
  title: "Serviços — Lucas Fernandes",
  description:
    "Marketing, Growth e Automação & IA. Estratégia, dados e integrações que transformam atenção em receita.",
};

export default function Page() {
  return <Servicos />;
}

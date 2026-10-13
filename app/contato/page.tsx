import type { Metadata } from "next";
import { Contato } from "@/src/views/Pages";

export const metadata: Metadata = {
  title: "Contato — Lucas Fernandes",
  description:
    "Projetos, parcerias ou uma vaga onde marketing e tecnologia se encontram. O caminho mais rápido é o WhatsApp.",
};

export default function Page() {
  return <Contato />;
}

import type { Metadata } from "next";
import { BlogList } from "@/src/views/Pages";

export const metadata: Metadata = {
  title: "Blog — Lucas Fernandes",
  description:
    "Textos curtos sobre o que eu aprendo operando: receita, funil, automação e inteligência artificial.",
};

export default function Page() {
  return <BlogList />;
}

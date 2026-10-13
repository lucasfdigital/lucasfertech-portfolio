import type { Metadata } from "next";
import { POSTS } from "@/src/content";
import { BlogPost } from "@/src/views/Pages";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} — Lucas Fernandes` : "Texto não encontrado — Lucas Fernandes",
    description: post?.excerpt,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}

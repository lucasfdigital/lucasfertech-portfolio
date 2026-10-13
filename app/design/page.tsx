import type { Metadata } from "next";
import DesignSystem from "@/src/DesignSystem";

export const metadata: Metadata = {
  title: "Design System — Lucas Fernandes",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <DesignSystem />;
}

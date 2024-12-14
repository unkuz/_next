import CtxApp from "@/components/layout/ctxApp";
import { LayoutWithTransition } from "@/components/layout/LayoutWithTransition";
import "@/styles/main.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unkuz",
  description: "Unkuz - Web developer based in Vietnam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CtxApp>
          <LayoutWithTransition>{children}</LayoutWithTransition>
        </CtxApp>
      </body>
    </html>
  );
}

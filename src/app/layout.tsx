import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Nextjs Page Transition",
  description: "CodeGrid GSAP Nextjs Page Transition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`  antialiased`}>
          <Nav />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}

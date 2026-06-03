import type { Metadata, Viewport } from "next";
import { assetPath } from "./lib/assets";
import "./globals.css";

const faviconUrl = assetPath("/images/logo-fitflow.png?v=2");

export const metadata: Metadata = {
  title: "FitFlow | Sua academia em fluxo",
  description:
    "Uma central de controle premium para academias que querem operar com mais profissionalismo.",
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: assetPath("/images/logo-fitflow.png")
  }
};

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

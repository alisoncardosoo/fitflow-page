import type { Metadata, Viewport } from "next";
import { PostHogAnalytics } from "./components/PostHogAnalytics";
import { assetPath } from "./lib/assets";
import "./globals.css";

const faviconUrl = assetPath("/favicon.png?v=3");

export const metadata: Metadata = {
  title: "FitFlow | Sua academia em fluxo",
  description:
    "Uma central de controle premium para academias que querem operar com mais profissionalismo.",
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl
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
      <body>
        <PostHogAnalytics>{children}</PostHogAnalytics>
      </body>
    </html>
  );
}

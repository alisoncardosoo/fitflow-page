import type { Metadata, Viewport } from "next";
import { PostHogAnalytics } from "./components/PostHogAnalytics";
import { assetPath } from "./lib/assets";
import "./globals.css";

const faviconUrl = assetPath("/favicon.png?v=3");
const siteUrl = new URL("https://meufitflow.com.br");
const siteTitle = "FitFlow | Sua academia em fluxo";
const siteDescription =
  "Uma central de controle premium para academias que querem operar com mais profissionalismo.";
const openGraphImageUrl = new URL("/open-graph-preview.jpg", siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "FitFlow",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: openGraphImageUrl,
        width: 1200,
        height: 628,
        alt: "FitFlow - Seu treino, seu fluxo."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [openGraphImageUrl]
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

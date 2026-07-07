import './globals.css';

import type { Metadata, Viewport } from "next";

const siteUrl = "https://www.carvacodeweb.com";
const title = "CarvaCode - Consultoria em Desenvolvimento Web & Apps";
const description =
  "Consultoria especializada em desenvolvimento web e aplicativos móveis. Transformamos ideias em produtos digitais escaláveis, com experiência técnica, entregas ágeis e suporte completo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "CarvaCode",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: "#0c1216",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

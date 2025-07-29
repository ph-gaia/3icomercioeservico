import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "3i Comércio e Serviço - Especialistas em Refrigeração",
  description: "Mais de 10 anos de experiência em instalação, manutenção e projetos de refrigeração comercial e industrial. Atendimento técnico especializado.",
  keywords: "refrigeração, ar condicionado, manutenção, instalação, comercial, industrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

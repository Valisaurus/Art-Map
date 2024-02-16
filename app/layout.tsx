import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
export const metadata = {
  title: "GBG ART GUIDE",
  description: "Art guide for Gothenburg city",
};

export const dynamic = "force-dynamic";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

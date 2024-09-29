import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer";
import StoreProvider from "../StoreProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GradBudy",
  description: "GradBudy",
  icons: "/GradBudy-G.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/GradBudy-G.svg"
          type="image/svg"
          sizes="any"
        />
      </Head>
      <body className={`${inter.className} relative`}>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StoreProvider from "./StoreProvider";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

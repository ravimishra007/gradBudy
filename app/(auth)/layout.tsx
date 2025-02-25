import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "../StoreProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gardbudy Authentication",
    description: "Gardbudy Authentication",
};

export default function AuthLayout({
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
                    <Toaster />
                </StoreProvider>
            </body>
        </html>
    );
}
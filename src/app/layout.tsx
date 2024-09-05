import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CustomCursor from "@/components/cursor/CustomCursor";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "THEFZNKHAN Portfolio",
    description: "The personal portfolio website of THEFZNKHAN",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <CustomCursor />
                <div className="w-full flex flex-col items-center">
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

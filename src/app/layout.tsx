import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
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
                <div className="w-[1536px] m-auto flex flex-col items-center max-2xl:w-[1280px] max-xl:w-[1024px] max-lg:w-[768px] max-md:w-[640px] max-sm:w-[475px] max-[475px]:w-[380px]">
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

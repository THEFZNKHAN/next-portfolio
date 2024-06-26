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
                <div className="w-[1536px] m-auto pl-12 pr-12 min-h-screen flex flex-col justify-between max-2xl:w-[1280px] max-xl:w-[1024px] max-xl:pl-5 max-xl:pr-5 max-lg:w-[768px] max-md:w-[640px] max-sm:w-[475px] max-[475px]:w-[380px]">
                    <Navbar />
                    <main className="mx-2">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

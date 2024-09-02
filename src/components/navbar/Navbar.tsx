"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="w-full fixed top-0 z-10 bg-bg_black p-1 shadow-lg font-mono">
            <div className="container mx-auto flex justify-between items-center px-4 py-2">
                <div className="flex items-center">
                    <Image
                        src="/icon.png"
                        alt="icon"
                        width={35}
                        height={35}
                        className="rounded-full mr-4"
                    />
                    <h1 className="text-2xl font-bold text-white">
                        <span className="text-3xl mr-[1px]">F</span>
                        AIZAN <span className="text-3xl mr-[2px]">K</span>HAN
                    </h1>
                </div>
                <div className="hidden md:flex gap-x-8">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="font-medium text-xl text-text_gray hover:text-purple-500 transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button
                        className="text-xl text-white"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </button>
                </div>
            </div>

            {isSidebarOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-20">
                    <div className="fixed top-0 right-0 w-64 bg-light_gray h-full shadow-lg">
                        <button
                            className="text-2xl text-white p-4"
                            onClick={toggleSidebar}
                        >
                            ×
                        </button>
                        <nav className="mt-8 flex flex-col items-center space-y-6">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-xl text-text_gray hover:text-purple-500 transition-all"
                                    onClick={toggleSidebar}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

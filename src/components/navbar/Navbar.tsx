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
        <div className="w-full flex flex-col items-center bg-bg_black p-1 pt-2 fixed z-10">
            <div className="w-11/12 text-white bg-light_gray border p-4 flex justify-between items-center rounded-lg font-mono">
                <div className="flex items-center">
                    <Image
                        src="/icon.png"
                        alt="icon"
                        width={35}
                        height={35}
                        className="rounded-full mr-4"
                    />
                    <h1 className="text-2xl font-bold">
                        <span className="text-3xl mr-[1px]">F</span>
                        AIZAN <span className="text-3xl mr-[2px]">K</span>HAN
                    </h1>
                </div>
                <div className="gap-x-8 mr-4 hidden md:flex justify-end">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="font-medium text-xl text-text_gray hover:text-purple-500 hover:font-semibold transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden flex items-center">
                    <button
                        className="text-xl text-white focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-16 right-0 w-64 pb-10 bg-light_gray border-l border-y rounded-l-xl text-white transform ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-20 md:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button
                        className="text-2xl text-white focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        ×
                    </button>
                </div>
                <nav className="flex flex-col items-center mt-2 space-y-6">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="text-xl text-text_gray hover:text-purple-500 hover:font-semibold transition-all"
                            onClick={toggleSidebar}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

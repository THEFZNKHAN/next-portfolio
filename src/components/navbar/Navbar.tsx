import React from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    {
        name: "Home",
        href: "#",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

const Navbar: React.FC = () => {
    return (
        <div className="flex flex-row">
            <div className="fixed h-2 w-full bg-bg_black" />
            <div className="fixed w-[1440px] mt-2 text-white bg-light_gray border p-4 py-4 px-5 flex justify-between items-center rounded-lg font-mono">
                <div className="w-2/3">
                    <Link href="" className="flex flex-row">
                        <Image
                            src="/icon.png"
                            alt="icon"
                            width={35}
                            height={35}
                            className="rounded-full mr-4"
                        />
                        <h1 className="text-2xl font-bold">
                            <span className="text-3xl mr-[1px]">
                                F
                            </span>
                            AIZAN{" "}
                            <span className="text-3xl mr-[2px]">
                                K
                            </span>
                            HAN
                        </h1>
                    </Link>
                </div>
                <div className="w-1/3 flex justify-between items-center">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="font-medium text-xl rounded-xl px-4 text-text_gray hover:text-white hover:border hover:font-semibold"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="fixed h-2 w-full mt-[78px] bg-bg_black" />
        </div>
    );
};

export default Navbar;

import React from "react";
import Link from "next/link";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-dark_gray text-text_gray border-t border-text_gray py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="text-center md:text-left">
                    <h1 className="text-sm md:text-base">
                        Copyright © 2024 <b className="text-white">THEFZNKHAN</b>. All rights reserved.
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end items-center mt-4 md:mt-0">
                    <Link href="https://github.com/thefznkhan">
                        <FaGithub className="text-3xl md:text-4xl text-text_gray p-2 mx-1 hover:text-white transition-colors duration-300" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/thefznkhan/">
                        <FaLinkedin className="text-3xl md:text-4xl text-text_gray p-2 mx-1 hover:text-white transition-colors duration-300" />
                    </Link>
                    <Link href="https://twitter.com/THEFZNKHAN">
                        <FaXTwitter className="text-3xl md:text-4xl text-text_gray p-2 mx-1 hover:text-white transition-colors duration-300" />
                    </Link>
                    <Link href="https://discord.com/users/1156287168986218666">
                        <FaDiscord className="text-3xl md:text-4xl text-text_gray p-2 mx-1 hover:text-white transition-colors duration-300" />
                    </Link>
                    <Link href="mailto:FKHAN20040@GMAIL.COM">
                        <MdEmail className="text-3xl md:text-4xl text-text_gray p-2 mx-1 hover:text-white transition-colors duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;

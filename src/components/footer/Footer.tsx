import React from "react";
import Link from "next/link";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="w-11/12 border-t border-gray-600 py-4 text-text_gray">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="text-center md:text-left">
                    <h1 className="text-sm md:text-base">
                        Copyright © 2024{" "}
                        <b className="text-white">THEFZNKHAN</b>. All rights
                        reserved.
                    </h1>
                </div>
                <div className="flex justify-center md:justify-end items-center mt-4 md:mt-0">
                    <Link href="https://github.com/thefznkhan">
                        <FaGithub className="text-3xl md:text-4xl p-2 text-gray-400 mx-1 max-md:p-1 hover:text-white transition-colors duration-300" />
                    </Link>
                    <Link href="https://leetcode.com/u/thefznkhan/">
                        <SiLeetcode className="text-3xl md:text-4xl p-2 text-gray-400 mx-1 max-md:p-1 hover:text-white transition-colors duration-300" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/thefznkhan/">
                        <FaLinkedin className="text-3xl md:text-4xl p-2 text-gray-400 mx-1 max-md:p-1 hover:text-white transition-colors duration-300" />
                    </Link>
                    <Link href="https://twitter.com/THEFZNKHAN">
                        <FaXTwitter className="text-3xl md:text-4xl p-2 text-gray-400 mx-1 max-md:p-1 hover:text-white transition-colors duration-300" />
                    </Link>
                    <Link href="https://discord.com/users/1156287168986218666">
                        <FaDiscord className="text-3xl md:text-4xl p-2 text-gray-400 mx-1 max-md:p-1 hover:text-white transition-colors duration-300" />
                    </Link>
                    <Link href="mailto:FKHAN20040@GMAIL.COM">
                        <MdEmail className="text-3xl md:text-4xl p-2 text-gray-400 mx-1 max-md:p-1 hover:text-white transition-colors duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;

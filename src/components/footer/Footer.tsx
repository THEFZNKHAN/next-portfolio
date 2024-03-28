import React from "react";
import Link from "next/link";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="h-28 border-t border-text_gray flex flex-row justify-around items-center">
            <div className="text-text_gray">
                <h1>
                    Copyright © 2024 <b className="text-white">THEFZNKHAN</b>.
                    All rights reserved.
                </h1>
            </div>
            <div className="flex flex-row h-full items-center">
                <Link href="https://github.com/thefznkhan">
                    <FaGithub className="text-4xl text-text_gray p-2 mx-1 hover:mb-3 transition-all delay-100" />
                </Link>
                <Link href="https://www.linkedin.com/in/thefznkhan/">
                    <FaLinkedin className="text-4xl text-text_gray p-2 mx-1 hover:mb-3 transition-all delay-100" />
                </Link>
                <Link href="https://twitter.com/THEFZNKHAN">
                    <FaXTwitter className="text-4xl text-text_gray p-2 mx-1 hover:mb-3 transition-all delay-100" />
                </Link>
                <Link href="https://discord.com/users/1156287168986218666">
                    <FaDiscord className="text-4xl text-text_gray p-2 mx-1 hover:mb-3 transition-all delay-100" />
                </Link>
                <Link href="mailto:FKHAN20040@GMAIL.COM">
                    <MdEmail className="text-4xl text-text_gray p-2 mx-1 hover:mb-3 transition-all delay-100" />
                </Link>
            </div>
        </div>
    );
};

export default Footer;

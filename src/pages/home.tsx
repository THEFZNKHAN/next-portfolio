import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
    return (
        <div
            id="home"
            className="min-h-screen border-b border-gray-600 flex flex-col md:flex-row justify-center items-center gap-x-12 p-4 md:p-8"
        >
            <div className="flex-1 order-2 md:order-1 flex flex-col items-center text-center p-6 mt-8 md:mt-16">
                <h1 className="text-4xl md:text-5xl text-purple-500 font-bold">
                    - I&apos;m{" "}
                    <span className="text-4xl md:text-5xl font-black font-mono ml-2 md:ml-4">
                        Md Faizan Khan
                    </span>
                    .
                </h1>
                <h1 className="text-3xl md:text-4xl font-extrabold font-sans my-4">
                    Web Developer
                </h1>
                <p className="text-lg md:text-xl mt-4 font-serif font-normal">
                    I&apos;m a Full Stack Web Developer focused on crafting
                    clean & user-friendly experiences. I am passionate about
                    building excellent websites and contributing to open-source
                    projects.
                </p>
                <Link
                    href={"https://github.com/thefznkhan"}
                    className="flex mt-6 px-4 py-2 border w-72 md:w-80 rounded-xl justify-center items-center hover:bg-purple-500 transition-all duration-300 ease-in-out"
                >
                    <p className="text-lg font-semibold font-sans">
                        Go to my Github Profile
                    </p>
                    <FaGithub className="text-3xl md:text-4xl mx-3" />
                    <BsArrowRight className="text-2xl" />
                </Link>
            </div>

            <div className="flex-1 order-1 md:order-2 mt-8 md:mt-16 w-full max-w-xs md:max-w-lg">
                <Image
                    src="/icon.png"
                    alt="icon"
                    width={500}
                    height={500}
                    className="object-contain mx-auto rounded-xl shadow-md shadow-purple-500"
                />
            </div>
        </div>
    );
};

export default Home;

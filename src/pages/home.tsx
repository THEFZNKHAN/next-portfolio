import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
    return (
        <div
            id="home"
            className="h-screen border-b border-gray-600 flex justify-center items-center gap-24"
        >
            <div className="flex-1 flex flex-col items-center p-6 mt-16">
                <h1 className="text-5xl text-purple-500 font-bold">
                    - I&apos;m{" "}
                    <span className="text-6xl font-black font-mono ml-4">
                        Md Faizan Khan
                    </span>
                    .
                </h1>
                <h1 className="text-5xl font-extrabold font-sans my-4">
                    Web Developer
                </h1>
                <p className="text-xl mt-4 font-serif font-normal">
                    I&apos;m Full Stack Web Developer focused on crafting clean
                    & user-friendly experiences, I am passionate about building
                    excellent website, I am also contributing to the open-source
                    projects.
                </p>
                <Link
                    href={"https://github.com/thefznkhan"}
                    className="flex mt-6 px-4 py-2 border w-80 rounded-xl justify-center items-center hover:bg-purple-600 transition-all duration-300 ease-in-out"
                >
                    <p className="text-lg font-semibold">
                        Go to my Github Profile
                    </p>
                    <FaGithub className="text-4xl mx-3" />
                    <BsArrowRight className="text-2xl" />
                </Link>
            </div>

            <div className="flex-1 mt-16">
                <Image
                    src="/icon.png"
                    alt="icon"
                    height={500}
                    width={500}
                    className="ml-10 rounded-3xl border border-purple-600"
                />
            </div>
        </div>
    );
};

export default Home;

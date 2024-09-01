import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
    return (
        <div
            id="home"
            className="lg:min-h-screen border-b border-gray-600 flex flex-col lg:flex-row justify-center items-center gap-x-12"
        >
            <div className="flex-1 order-2 lg:order-1 flex flex-col items-center text-center py-6 mt-16 max-md:mt-8">
                <h1 className="text-5xl max-md:text-3xl max-xl:text-4xl text-purple-500 font-bold">
                    - I&apos;m{" "}
                    <span className="font-black font-mono ml-2 md:ml-4">
                        Md Faizan Khan
                    </span>
                    .
                </h1>
                <h1 className="text-4xl max-md:text-2xl max-xl:text-3xl font-extrabold max-lg:font-bold font-sans my-4 max-md:my-3">
                    Web Developer
                </h1>
                <p className="text-xl max-lg:text-lg max-md:text-sm mt-4 font-serif font-normal">
                    I&apos;m a Full Stack Web Developer focused on crafting
                    clean & user-friendly experiences. I am passionate about
                    building excellent websites and contributing to open-source
                    projects.
                </p>
                <Link
                    href={"https://github.com/thefznkhan"}
                    className="flex mt-6 px-4 py-2 border w-72 md:w-80 rounded-xl justify-center items-center hover:bg-purple-500 transition-all duration-300 ease-in-out"
                >
                    <p className="text-lg font-semibold font-sans max-md:text-sm">
                        Go to my Github Profile
                    </p>
                    <FaGithub className="text-4xl max-md:text-3xl mx-3" />
                    <BsArrowRight className="text-2xl" />
                </Link>
            </div>

            <div className="flex-1 max-lg:flex-none order-1 lg:order-2 mt-8 lg:mt-16 w-full max-w-xs lg:max-w-lg max-lg:pt-20">
                <Image
                    src="/icon.png"
                    alt="icon"
                    width={500}
                    height={500}
                    className="object-contain mx-auto rounded-xl max-lg:rounded-full max-md:w-60 shadow-md shadow-purple-500"
                />
            </div>
        </div>
    );
};

export default Home;

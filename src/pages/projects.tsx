import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectItems = [
    {
        title: "Spotify Clone",
        technologies: "React, JavaScript, CSS, gh-pages",
        image: "/spotify.png",
        github: "https://github.com/THEFZNKHAN/spotify-clone",
        demo: "https://thefznkhan.github.io/spotify-clone/",
    },
    {
        title: "React Portfolio",
        technologies: "React, JavaScript, CSS, gh-pages",
        image: "/portfolio-react.png",
        github: "https://github.com/THEFZNKHAN/portfolio-react",
        demo: "https://thefznkhan.github.io/portfolio-react/",
    },
    {
        title: "Thoughts Agency",
        technologies: "NextJS, Next-Auth, TypeScript, TailwindCSS, Vercel",
        image: "/thought-agency.png",
        github: "https://github.com/THEFZNKHAN/nextjs-learn",
        demo: "https://github.com/THEFZNKHAN/nextjs-learn",
    },
    {
        title: "NextJs Appwrite",
        technologies:
            "NextJS, Next-Auth, Appwrite, TypeScript, TailwindCSS, Vercel",
        image: "/nextjs-appwrite.png",
        github: "https://github.com/THEFZNKHAN/nextjs-appwrite",
        demo: "https://nextjs-appwrite-mocha.vercel.app/",
    },
    {
        title: "Quote Generator",
        technologies: "HTML, CSS, JavaScript, JSON",
        image: "/quote-generator.png",
        github: "https://github.com/THEFZNKHAN/QuoteGenerator",
        demo: "https://thefznkhan.github.io/QuoteGenerator/",
    },
    {
        title: "QR Code Generator",
        technologies: "HTML, CSS, JavaScript, QR Code Library",
        image: "/qr-generator.png",
        github: "https://github.com/THEFZNKHAN/QR_Code_Generator",
        demo: "https://thefznkhan.github.io/QR_Code_Generator/",
    },
    {
        title: "Calculator",
        technologies: "HTML, CSS, JavaScript",
        image: "/calculator.png",
        github: "https://github.com/THEFZNKHAN/Calculator",
        demo: "https://thefznkhan.github.io/Calculator/",
    },
    {
        title: "Web Calculator",
        technologies: "HTML, CSS, JavaScript",
        image: "/web-calculator.png",
        github: "https://github.com/THEFZNKHAN/Web_Calculator",
        demo: "https://thefznkhan.github.io/Web_Calculator/",
    },
];

const Projects = () => {
    return (
        <div
            id="projects"
            className="h-auto pt-[86px] flex flex-col text-center pb-10 border-b border-gray-600"
        >
            <h1 className="text-6xl font-black mt-5 mb-10 text-purple-500 font-mono">
                Projects
            </h1>

            <div className="flex flex-wrap justify-evenly">
                {ProjectItems.map((item, index) => (
                    <div
                        key={index}
                        className=" w-5/12 rounded-xl border h-[400px] m-4"
                    >
                        <div className="h-4/5 relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain rounded-t-xl"
                            />
                        </div>
                        <div className="h-1/5 bg-light_gray rounded-b-xl flex justify-between items-center border-t">
                            <div className="px-4">
                                <h1 className="text-2xl font-bold text-text_gray font-mono">
                                    {item.title}
                                </h1>
                                <p className=" text-base font-medium text-gray-400 font-sans">
                                    {item.technologies}
                                </p>
                            </div>
                            <div className="flex justify-between items-center px-4">
                                <Link
                                    href={item.github}
                                    className="text-5xl mr-4"
                                >
                                    <FaGithub
                                        className="hover:text-black hover:rounded-full p-1 hover:bg-white"
                                        title="github repo"
                                    />
                                </Link>
                                <Link href={item.demo} className="text-4xl">
                                    <FaExternalLinkAlt
                                        className="hover:text-black hover:rounded-lg p-1 hover:bg-white"
                                        title="live demo"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

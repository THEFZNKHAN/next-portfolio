"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectItem = {
    title: string;
    technologies: string;
    image: string;
    github: string;
    demo: string;
};

const projects: ProjectItem[] = [
    {
        title: "Price Tracker",
        technologies: "NextJs, TypeScript, TailwindCSS, MongoDB",
        image: "/price-tracker.png",
        github: "https://github.com/THEFZNKHAN/price-tracker",
        demo: "https://v-price-tracker.vercel.app/",
    },
    {
        title: "Spotify Clone",
        technologies: "React, JavaScript, CSS",
        image: "/spotify.png",
        github: "https://github.com/THEFZNKHAN/spotify-clone",
        demo: "https://thefznkhan.github.io/spotify-clone/",
    },
    {
        title: "React Portfolio",
        technologies: "ReactJS, JavaScript, CSS",
        image: "/portfolio-react.png",
        github: "https://github.com/THEFZNKHAN/portfolio-react",
        demo: "https://thefznkhan.github.io/portfolio-react/",
    },
    {
        title: "Thoughts Agency",
        technologies: "NextJS, TypeScript, TailwindCSS, Vercel",
        image: "/thought-agency.png",
        github: "https://github.com/THEFZNKHAN/nextjs-learn",
        demo: "https://github.com/THEFZNKHAN/nextjs-learn",
    },
    {
        title: "NextJs Appwrite",
        technologies: "NextJS, TypeScript, TailwindCSS, Vercel",
        image: "/nextjs-appwrite.png",
        github: "https://github.com/THEFZNKHAN/nextjs-appwrite",
        demo: "https://nextjs-appwrite-mocha.vercel.app/",
    },
    {
        title: "Tic Tac Toe",
        technologies: "ReactJS, TailwindCSS, JavaScript, Github",
        image: "/tic-tac-toe.png",
        github: "https://github.com/THEFZNKHAN/tic-tac-toe",
        demo: "https://thefznkhan.github.io/tic-tac-toe/",
    },
    {
        title: "Quote Generator",
        technologies: "HTML, CSS, JavaScript",
        image: "/quote-generator.png",
        github: "https://github.com/THEFZNKHAN/QuoteGenerator",
        demo: "https://thefznkhan.github.io/QuoteGenerator/",
    },
    {
        title: "QR Code Generator",
        technologies: "HTML, CSS, JavaScript",
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
];

const Projects = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    const openModal = (image: string) => {
        setCurrentImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentImage(null);
    };

    return (
        <section
            id="projects"
            className="w-11/12 pb-8 border-b border-gray-600"
        >
            <h2 className="text-5xl font-black mb-8 lg:mt-20 text-purple-500 text-center max-md:text-4xl max-md:mt-5">
                <span className="text-white">My</span> Projects
            </h2>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="w-full md:w-5/12 lg:w-1/3 xl:w-1/4 bg-light_gray rounded-xl shadow-md hover:shadow-purple-500 transition-shadow duration-300"
                        title={project.title}
                        onClick={() => openModal(project.image)}
                    >
                        <div className="relative h-64 max-lg:h-40 cursor-pointer">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover rounded-t-xl"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-2xl max-md:text-xl font-bold text-text_gray mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-4">
                                {project.technologies}
                            </p>
                            <div className="flex justify-between items-center">
                                <Link
                                    href={project.github}
                                    className="text-2xl text-gray-600 hover:text-black"
                                    title="GitHub Repository"
                                >
                                    <FaGithub className="hover:text-white p-1 transition-colors duration-300" />
                                </Link>
                                <Link
                                    href={project.demo}
                                    className="text-2xl text-gray-600 hover:text-black"
                                    title="Live Demo"
                                >
                                    <FaExternalLinkAlt className="hover:text-white p-1 transition-colors duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && currentImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-3xl w-full p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={currentImage}
                            alt="Project Image"
                            layout="responsive"
                            width={800}
                            height={600}
                            className="rounded-lg"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-2xl text-white font-extrabold hover:text-gray-400 transition-colors"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;

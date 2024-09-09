import Image from "next/image";
import React, { Suspense } from "react";

interface Skill {
    name: string;
    icon: string;
}

interface SkillCategory {
    name: string;
    skills: Skill[];
}

const AllSkills: SkillCategory[] = [
    {
        name: "Frontend",
        skills: [
            { name: "HTML", icon: "/html.png" },
            { name: "CSS", icon: "/css.png" },
            { name: "JavaScript", icon: "/js.png" },
            { name: "TypeScript", icon: "/ts.png" },
            { name: "ReactJs", icon: "/react.png" },
            { name: "NextJs", icon: "/next-js.png" },
            { name: "TailwindCSS", icon: "/tailwind.png" },
            { name: "MaterialUI", icon: "/material-ui.png" },
        ],
    },
    {
        name: "Backend",
        skills: [
            { name: "NodeJS", icon: "/node.png" },
            { name: "Express", icon: "/express.png" },
            { name: "Next-Auth", icon: "/next-auth.png" },
            { name: "Prisma", icon: "/prisma.png" },
        ],
    },
    {
        name: "Database",
        skills: [
            { name: "MySql", icon: "/mysql.png" },
            { name: "MongoDB", icon: "/mongodb.png" },
            { name: "PostgreSQL", icon: "/postgresql.png" },
            { name: "Firebase", icon: "/firebase.png" },
        ],
    },
    {
        name: "Language",
        skills: [
            { name: "Java", icon: "/java.png" },
            { name: "Python", icon: "/python.png" },
        ],
    },
    {
        name: "Others",
        skills: [
            { name: "Bash", icon: "/bash.png" },
            { name: "Git", icon: "/git.png" },
            { name: "Github", icon: "/github.png" },
            { name: "Docker", icon: "/docker.png" },
        ],
    },
];

const Skills = () => {
    return (
        <div
            id="skills"
            className="w-11/12 border-b border-gray-600 flex flex-col items-center text-center bg-dark_gray pb-8"
        >
            <h1 className="text-5xl font-black mb-8 lg:mt-16 text-purple-500 text-center max-md:text-4xl max-md:mt-5">
                <span className="text-white">My</span> Skills
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg">
                {AllSkills.map((category) => (
                    <div
                        key={category.name}
                        className="bg-light_gray rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
                    >
                        <h2 className="text-2xl font-bold text-white bg-purple-600 py-4">
                            {category.name}
                        </h2>
                        <div className="flex flex-wrap w-full h-full justify-center items-center p-4 gap-5 max-lg:gap-y-3">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-12 h-12 relative">
                                        <Suspense fallback={"Loading..."}>
                                            <Image
                                                src={skill.icon}
                                                alt={skill.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </Suspense>
                                    </div>
                                    <p className="mt-2 text-text_gray font-mono font-medium">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

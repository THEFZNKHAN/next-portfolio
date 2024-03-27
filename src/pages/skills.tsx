import Image from "next/image";
import React from "react";

interface Skill {
    name: string;
    icon: string;
}

interface SkillCategory {
    name: string;
    skills: Skill[];
}

interface AllSkillsType extends Array<SkillCategory> {}

const AllSkills: AllSkillsType = [
    {
        name: "Frontend",
        skills: [
            {
                name: "HTML",
                icon: "/html.png",
            },
            {
                name: "CSS",
                icon: "/css.png",
            },
            {
                name: "JavaScript",
                icon: "/js.png",
            },
            {
                name: "TypeScript",
                icon: "/ts.png",
            },
            {
                name: "ReactJs",
                icon: "/react.png",
            },
            {
                name: "NextJs",
                icon: "/next-js.png",
            },
            {
                name: "Tailwind CSS",
                icon: "/tailwind.png",
            },
            {
                name: "Material UI",
                icon: "/material-ui.png",
            },
        ],
    },
    {
        name: "Backend",
        skills: [
            {
                name: "NodeJS",
                icon: "/node.png",
            },
            {
                name: "Express",
                icon: "/express.png",
            },
            {
                name: "Next-Auth",
                icon: "/next-auth.png",
            },
            {
                name: "Prisma",
                icon: "/prisma.png",
            },
        ],
    },
    {
        name: "Database",
        skills: [
            {
                name: "MySql",
                icon: "/mysql.png",
            },
            {
                name: "MongoDB",
                icon: "/mongodb.png",
            },
            {
                name: "PostgreSQL",
                icon: "/postgresql.png",
            },
            {
                name: "Firebase",
                icon: "/firebase.png",
            },
        ],
    },
    {
        name: "Language",
        skills: [
            {
                name: "Java",
                icon: "/java.png",
            },
        ],
    },
    {
        name: "Others",
        skills: [
            {
                name: "Bash",
                icon: "/bash.png",
            },
            {
                name: "Git",
                icon: "/git.png",
            },
            {
                name: "Github",
                icon: "/github.png",
            },
            {
                name: "Docker",
                icon: "/docker.png",
            },
        ],
    },
];

const Skills = () => {
    return (
        <div
            id="skills"
            className="h-auto pt-[86px] flex flex-col text-center pb-12 border-b border-gray-600"
        >
            <h1 className="text-6xl font-black mt-5 mb-10 text-purple-500 font-mono">
                <span className="text-white">My</span> Skills
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-10">
                {AllSkills.map((category) => (
                    <div
                        key={category.name}
                        className="flex flex-col items-center border rounded-lg w-2/5 h-80"
                    >
                        <div className="bg-purple-500 w-full rounded-t-lg border-b">
                            <h1 className="text-3xl font-bold text-white my-4 bg-purple font-mono">
                                {category.name}
                            </h1>
                        </div>

                        <div className="flex flex-wrap justify-center items-center bg-light_gray rounded-b-lg w-full h-full">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center mx-5"
                                >
                                    <div className="w-20 h-16 relative">
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="font-semibold text-text_gray mt-2 font-sans">
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

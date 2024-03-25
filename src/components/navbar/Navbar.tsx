import Link from "next/link";
import Image from "next/image";

const navItems = [
    {
        name: "Home",
        href: "#",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

const Navbar: React.FC = () => {
    return (
        <div className="w-full mt-2 py-4 px-5 flex justify-between items-center rounded-xl bg-[#1c1b23] font-mono">
            <div className="w-2/3">
                <Link href="" className="flex flex-row">
                    <Image
                        src="/icon.png"
                        alt="icon"
                        width={30}
                        height={30}
                        className="rounded-full mr-4"
                    />
                    <h1 className="text-2xl font-bold">MD FAIZAN KHAN</h1>
                </Link>
            </div>
            <div className="w-1/3 flex justify-between">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="font-medium text-xl hover:text-red-500 hover:font-semibold"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;

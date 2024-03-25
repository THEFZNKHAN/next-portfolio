import Index from "@/pages";
import Contact from "@/pages/contact";
import Projects from "@/pages/projects";
import Skills from "@/pages/skills";

export default function Home() {
    return (
        <div className="">
            <Index />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

import Home from "@/pages/home";
import Contact from "@/pages/contact";
import Projects from "@/pages/projects";
import Skills from "@/pages/skills";

export default function App() {
    return (
        <div className="w-full m-auto px-4 max-w-screen-xl flex flex-col items-center">
            <Home />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

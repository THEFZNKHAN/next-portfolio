import Home from "@/pages/home";
import Contact from "@/pages/contact";
import Projects from "@/pages/projects";
import Skills from "@/pages/skills";

export default function App() {
    return (
        <div className="w-10/12 m-auto px-4">
            <Home />
            <Projects />
            <Skills />
            {/* <Contact /> */}
        </div>
    );
}

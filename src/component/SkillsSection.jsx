import {useState} from "react";
import {cn} from "@/lib/util.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGitAlt, FaFigma, FaDocker } from "react-icons/fa";
import {SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiIntellijidea, SiWebstorm} from "react-icons/si";
import {VscVscodeInsiders} from "react-icons/vsc";

const skills = [
    {name: "HTML", category: "frontend", icon: <FaHtml5 className="h-8 w-8 text-[#E34F26]" />},
    {name: "CSS", category: "frontend", icon: <FaCss3Alt className="h-8 w-8 text-[#1572B6]" />},
    {name: "JavaScript", category: "frontend", icon: <FaJs className="h-8 w-8 text-[#F7DF1E]" />},
    {name: "React", category: "frontend", icon: <FaReact className="h-8 w-8 text-[#61DAFB]" />},
    {name: "TypeScript", category: "frontend", icon: <SiTypescript className="h-8 w-8 text-[#3178C6]" />},
    {name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss className="h-8 w-8 text-[#38BDF8]" />},

    {name: "Node.js", category: "backend", icon: <FaNodeJs className="h-8 w-8 text-[#339933]" />},
    {name: "Express", category: "backend", icon: <SiExpress className="h-8 w-8 text-[#000000]" />},
    {name: "MongoDB", category: "backend", icon: <SiMongodb className="h-8 w-8 text-[#47A248]" />},
    {name: "MySQL", category: "backend", icon: <SiMysql className="h-8 w-8 text-[#4479A1]" />},
    {name: "Java", category: "backend", icon: <FaJava className="h-8 w-8 text-[#007396]" />},

    {name: "Git/GitHub", category: "tools", icon: <FaGitAlt className="h-8 w-8 text-[#F05032]" />},
    {name: "IntelliJ IDEA", category: "tools", icon: <SiIntellijidea className="h-8 w-8 text-[#000000]" />},
    {name: "Vs Code", category: "tools", icon: <VscVscodeInsiders className="h-8 w-8 text-[#2496ED]" />},
    {name: "WebStorm ", category: "tools", icon: <SiWebstorm className="h-8 w-8 text-[#F7DF1E]" />},
    {name: "Figma", category: "tools", icon: <FaFigma className="h-8 w-8 text-[#F24E1E]" />},
    {name: "Docker", category: "tools", icon: <FaDocker className="h-8 w-8 text-[#2496ED]" />}
];

const categories = ["all","frontend", "backend","tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const fillterdSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="bg-gradient-to-r from-[#FF5A57] via-[#E02F57] to-[#6700A3] bg-clip-text
                    text-transparent opacity-0 animate-fade-in-delay-1">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-gradient-to-r from-[#FF5A57] via-[#E02F57] to-[#6700A3] text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
                            )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fillterdSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center">
                        <div className="mb-4">
                            {skill.icon}
                        </div>
                        <h3 className="font-semibold text-lg text-center">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
}
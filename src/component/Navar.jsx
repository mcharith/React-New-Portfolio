import {cn} from "@/lib/util.js";
import {useEffect, useState} from "react";
import {Menu,X} from "lucide-react";
import {ThemeToggle} from "@/component/ThemeToggle.jsx";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Certifications", href: "#certificates"},
    {name: "Project", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Navar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return <nav className={cn("fixed w-full z-40 transition-all duration-300,",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}
    >
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center"
               href="#hero"
            >
                <span className="relative z-10">
                    <span className="text-glow text-foreground"> Charith </span> <span className="bg-gradient-to-r from-[#FF5A57] via-[#E02F57] to-[#6700A3] bg-clip-text
                    text-transparent opacity-0 animate-fade-in-delay-1">Siriwardana</span>
                </span>
            </a>

            {/*desktop nav*/}
            <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item, key) => (
                    <a
                        key={key}
                        href={item.href}
                        className="text-foreground/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r
                 hover:from-[#FF5A57] hover:via-[#E02F57] hover:to-[#6700A3] transition-colors duration-600"
                    >
                        {item.name}
                    </a>
                ))}

                {/* Theme toggle in navbar */}
                <ThemeToggle />
            </div>

            {/*mobile nav*/}
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} /> }
            </button>

            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"

            )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle className="mt-4" />
                </div>
            </div>


        </div>
    </nav>
}
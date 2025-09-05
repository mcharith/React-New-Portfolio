import {ArrowDown} from "lucide-react";

export const HeroSection = () => {
    return <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi I'm </span>
                    <span className="bg-gradient-to-r from-[#FF5A57] via-[#E02F57] to-[#6700A3] bg-clip-text
                    text-transparent opacity-0 animate-fade-in-delay-1">Charith</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Siriwardana</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I’m a passionate Software Engineering student based in Sri Lanka, with hands-on experience in both
                    frontend and backend development. As a full-stack developer.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="url(#gradient)"
            >
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FF5A57" />
                        <stop offset="50%" stopColor="#E02F57" />
                        <stop offset="100%" stopColor="#6700A3" />
                    </linearGradient>
                </defs>
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </section>
}
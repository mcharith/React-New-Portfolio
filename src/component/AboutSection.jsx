import {Briefcase, Code, User} from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="bg-gradient-to-r from-[#FF5A57] via-[#E02F57] to-[#6700A3] bg-clip-text
                    text-transparent opacity-0 animate-fade-in-delay-1"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Full-Stack Developer</h3>

                    <p className="text-muted-foregrond">
                        With over 2 years of experience in web development, I specialize in creating responsive,
                        accessible, and performant web applications using modern technologies.
                    </p>

                    <p className="text-muted-foregrond">
                        I'm passionate about creating elegant solutions to complex problems, and I'm constantly
                        learning new technologies and techniques to stay at the forefront of the ever-evolving
                        web landscape.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a
                            href="/Charith_CV.pdf"
                            download="Charith_CV.pdf"
                            className="px-6 py-2 rounded-full border-[1px] border-red-400
                            bg-gradient-to-r from-[#FF5A57] via-[#E02F57] to-[#6700A3] bg-clip-text text-transparent
                            [border-image:linear-gradient(to right,#FF5A57,#E02F57,#6700A3)_1] transition-all duration-300
                            hover:opacity-80 inline-block"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="url(#gradient)"
                                >
                                    <defs>
                                        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#FF5A57" />
                                            <stop offset="50%" stopColor="#E02F57" />
                                            <stop offset="100%" stopColor="#6700A3" />
                                        </linearGradient>
                                    </defs>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foregrond">
                                    Creating responsive websites and applications with modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="url(#user-gradient)"
                                >
                                    <defs>
                                        <linearGradient id="user-gradient" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#FF5A57" />
                                            <stop offset="50%" stopColor="#E02F57" />
                                            <stop offset="100%" stopColor="#6700A3" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5.121 17.804A12 12 0 1118.879 6.196 12 12 0 015.12 17.804z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foregrond">
                                    Designing intuitive user interface and seamless use experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="url(#briefcase-gradient)"
                                >
                                    <defs>
                                        <linearGradient id="briefcase-gradient" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#FF5A57" />
                                            <stop offset="50%" stopColor="#E02F57" />
                                            <stop offset="100%" stopColor="#6700A3" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2M4 7h16v12H4z"
                                    />
                                </svg>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Mobile App Development</h4>
                                <p className="text-muted-foregrond">
                                    Developing innovative mobile applications from concept to deployment, ensuring seamless user experience, performance, and maintainability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
import React from 'react';
import miss_kanchana from "../../src/assets/recommendations/IMG_7172.jpg"
import mr_chandula from "../../src/assets/recommendations/IMG_7174.jpg"
import mr_achintha from "../../src/assets/recommendations/IMG_7175.jpg"

const recommendations = [
    {
        initials: "CN",
        image: mr_chandula,
        name: "Chandula Nanayakkara",
        role: "Chief Executive Officer",
        company: "All In One Holdings (PVT) LTD",
        tag: "CEO",
        quote:
            "We are truly fortunate that your first corporate and professional experience began with our company, because we genuinely believe that one day you will rise to the top of this industry and accomplish remarkable things within the tech sector. You are an honest, dedicated, and hardworking individual, and those qualities will help you achieve many milestones in the future.",
    },
    {
        initials: "AP",
        image: mr_achintha,
        name: "Achintha Pasindu",
        role: "Chief Technology Officer",
        company: "All In One Holdings (PVT) LTD",
        tag: "CTO",
        quote:
            "Throughout your internship, you consistently demonstrated exceptional technical expertise, a sharp problem-solving mindset, and an unwavering commitment to delivering high-quality software solutions. Beyond your technical accomplishments, what truly sets you apart is your character honest, hardworking, and deeply dedicated. The level of maturity, responsibility, and professionalism you brought to every task exceeded our expectations.",
    },
    {
        initials: "KR",
        image: miss_kanchana,
        name: "Kanchana Ranathunga",
        role: "Project Manager & Supervisor",
        company: "All In One Holdings (PVT) LTD",
        tag: "Project Manager",
        quote:
            "Throughout the internship period, you consistently demonstrated outstanding technical skills, professionalism, dedication, and enthusiasm toward learning and teamwork. Your contributions to the Bar System and the Panagoda Funerals Booking Portal were particularly noteworthy. Your overall performance exceeded expectations, and I highly recommend you for future opportunities in Software Engineering.",
    },
];

export const RecommendationSection = () => {
    return (
        <section id="recommendations" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    What They Said About{" "}
                    <span className="bg-gradient-to-r from-[#FF5A57] via-[#E02F57] to-[#6700A3] bg-clip-text text-transparent opacity-0 animate-fade-in-delay-1">
                        Me
                    </span>
                </h2>

                <div className="flex flex-col gap-6">
                    {recommendations.map((rec, i) => (
                        <div key={i} className="gradient-border p-6 card-hover">
                            <span
                                className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-4
                                bg-gradient-to-r from-[#FF5A57]/10 via-[#E02F57]/10 to-[#6700A3]/10
                                border border-[#FF5A57]/25 text-[#FF5A57]"
                            >
                                {rec.tag} · {rec.company}
                            </span>

                            <p className="text-4xl leading-none text-[#FF5A57] opacity-40 font-serif mb-2">"</p>

                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-justify">
                                {rec.quote}
                            </p>

                            <div className="flex items-center gap-3">
                                {/* Gradient border ring wrapping the avatar */}
                                <div
                                    className="flex-shrink-0 rounded-full p-[2px]"
                                    style={{
                                        background: "linear-gradient(135deg, #FF5A57, #E02F57, #6700A3)",
                                    }}
                                >
                                    <div className="rounded-full overflow-hidden w-11 h-11 bg-background">
                                        {rec.image ? (
                                            <img
                                                src={rec.image}
                                                alt={rec.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div
                                                className="w-full h-full flex items-center justify-center text-sm font-semibold text-white"
                                                style={{
                                                    background: "linear-gradient(135deg, #FF5A57, #6700A3)",
                                                }}
                                            >
                                                {rec.initials}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col text-left">
                                    <span className="font-semibold text-sm">{rec.name}</span>
                                    <span className="text-xs text-muted-foreground">{rec.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
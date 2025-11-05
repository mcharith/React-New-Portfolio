import Sololearn_Java from "@/assets/certificates/551b6764-3aa6-4617-8a4d-03b6d6ab194d.jpg";
import hackerRank_se_intern from "@/assets/certificates/Screenshot 2025-11-05 at 14.05.41.png";

const certificates = [
    {
        id: 1,
        image: Sololearn_Java,
        title: "Java Programming Certificate - SoloLearn.com",
    },
    {
        id: 2,
        image: Sololearn_Java,
        title: "Web Development Certificate - SoloLearn.com",
    },
    {
        id: 3,
        image: hackerRank_se_intern,
        title: "Software Engineering Intern - HackerRank.com",
    },
];

export const CertificationSections = () => {
    return (
        <section id="certificates" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My{" "}
                    <span
                        className="bg-gradient-to-r from-[#FF5A57] via-[#E02F57] to-[#6700A3]
                       bg-clip-text text-transparent opacity-0 animate-fade-in-delay-1"
                    >
            Certificates
          </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my professional certificates, showcasing my skills
                    and achievements across various technologies and development areas.
                </p>

                {/* Certificate Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((certificate) => (
                        <div
                            key={certificate.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-all duration-300"
                        >
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="text-lg font-semibold mb-2">
                                    {certificate.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
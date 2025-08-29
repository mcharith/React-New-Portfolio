import watchStoreImg from "../assets/projects/watch-store.png";
import wineStoreImg from "../assets/projects/wine-store-management.png";
import onlineBusImg from "../assets/projects/online-bus-seat-reservation.png";
import utaxImg from "../assets/projects/utax-cover.png";
import libraryImg from "../assets/projects/library-management-system.png";
import {ArrowRight, ExternalLink, Github} from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Wine Store Management System',
        description:"I created a Wine Store Management System using Java (JavaFX) for the frontend and MySQL as the\n" +
            "database. The system allows store owners to manage inventory, track sales, handle customer details, and\n" +
            "generate reports efficiently.With its intuitive interface and reliable backend, the application streamlines\n" +
            "daily operations and improves overall store management.",
        image: wineStoreImg,
        tags:["Java","MySQL"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id: 2,
        title: 'Online Watch Store Web Application',
        description:"I developed an Online Clock Store E-commerce Web Application using JSP (JavaServer Pages) " +
            "for the frontend and backend integration. The system allows users to browse clocks, add products to " +
            "the cart, place orders, and manage their accounts seamlessly. Key features include product management, " +
            "secure user authentication, and order tracking.",
        image: watchStoreImg,
        tags:["Java","MySQL"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id: 3,
        title: 'Online Bus Reservation Web Application',
        description:"I developed an Online Bus Seat Reservation Web Application using Spring Boot for the backend and\n" +
            "MySQL as the database. The system enables passengers to search for buses, reserve seats, and generate\n" +
            "e-tickets instantly after booking. It also includes a reminder feature that notifies passengers about their\n" +
            "upcoming trips.",
        image: onlineBusImg,
        tags:["Spring-Boot","JWT","MySQL"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id: 4,
        title: 'Library Management System',
        description:"Efficiently manage books, readers, and borrowing records. The system allows librarians to add,\n" +
            " and delete books, while users can browse available books, borrow them, and track their return\n" +
            "status. Key features include real-time book availability updates, user authentication, and an intuitive\n" +
            "interface for administrators.By leveraging React for the frontend and Node.js with\n" +
            "Express.js for the backend, connected to MongoDB for data storage, the system provides a seamless,\n" +
            "responsive, and scalable solution for modern library operations.",
        image: libraryImg,
        tags:["MERN","JWT"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id: 5,
        title: 'Simplify Tax Assistant System',
        description:"As part of my team project U-Tax, developed for the Circle Edge competition, we built a tax management\n" +
            "solution using the MERN stack (MongoDB, Express.js, React, Node.js). The system was designed to help Sri\n" +
            "Lankan taxpayers easily calculate and manage their taxes through a user-friendly interface and secure\n" +
            "backend. This collaborative project showcased our ability to apply modern technologies in solving real-world problems, and our team was awarded Second Place 🥈 in the competition.",
        image: utaxImg,
        tags:["MERN","OCR","JWT"],
        demoUrl:"https://urtaxcalculater.vercel.app",
        githubUrl:"#",
    }
]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Recent <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects.Each projects was carefully crafted with attention to detail,
                performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) => (
                    <div key={key}
                         className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-seondary text-secondary-foreground">{tag}</span>
                                        ))}
                                </div>


                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">

                                    <a href={project.demoUrl}
                                       target="_blank"
                                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    ><ExternalLink size={20}/></a>

                                    <a href={project.githubUrl}
                                       target="_blank"
                                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    ><Github size={20}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/mcharith"
                >
                    Check My GitHub <ArrowRight size={16}/>
                </a>
            </div>

        </div>
    </section>
}
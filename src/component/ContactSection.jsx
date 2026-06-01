import { Instagram, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/util.js";
import Swal from "sweetalert2";
import { useState, useRef } from "react";

export const ContactSection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const formRef = useRef(null);
    const sectionRef = useRef(null);

    const validate = (formData) => {
        const newErrors = {};
        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const message = formData.get("message")?.trim();

        if (!name) {
            newErrors.name = "Name is required.";
        }
        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!message) {
            newErrors.message = "Message cannot be empty.";
        }

        return newErrors;
    };

    const handleSendClick = () => {
        // Scroll to the section first
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        // Validate fields
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsLoading(true);

        formData.append("access_key", "5a1880cf-6c48-4d47-a3b5-49a7387668e0");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then(res => res.json());

            if (res.success) {
                Swal.fire({
                    icon: "success",
                    title: "Email Sent Successfully",
                    text: "Thank you for reaching out!",
                    confirmButtonColor: "#6366f1"
                });
                form.reset();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong. Please try again.",
                    confirmButtonColor: "#6366f1"
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Unable to send email. Please try again later.",
                confirmButtonColor: "#6366f1"
            });
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In{" "}
                    <span className="bg-gradient-to-r from-[#FF5A57] via-[#E02F57] to-[#6700A3] bg-clip-text text-transparent opacity-0 animate-fade-in-delay-1">
                        Touch
                    </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="url(#mail-gradient)" strokeWidth={2}>
                                        <defs>
                                            <linearGradient id="mail-gradient" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="#FF5A57" />
                                                <stop offset="50%" stopColor="#E02F57" />
                                                <stop offset="100%" stopColor="#6700A3" />
                                            </linearGradient>
                                        </defs>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a href="mailto:charithmihiranga453@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-light text-sm">
                                        charithmihiranga453@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="url(#phone-gradient)" strokeWidth={2}>
                                        <defs>
                                            <linearGradient id="phone-gradient" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="#FF5A57" />
                                                <stop offset="50%" stopColor="#E02F57" />
                                                <stop offset="100%" stopColor="#6700A3" />
                                            </linearGradient>
                                        </defs>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.29a2 2 0 0 1 2.11-.45c.74.35 1.53.6 2.34.72A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Phone</h4>
                                    <a href="tel:+94778986962" className="text-muted-foreground hover:text-primary transition-colors font-light text-sm">
                                        +(94) 77 8986 962
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="url(#map-gradient)" strokeWidth={2}>
                                        <defs>
                                            <linearGradient id="map-gradient" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="#FF5A57" />
                                                <stop offset="50%" stopColor="#E02F57" />
                                                <stop offset="100%" stopColor="#6700A3" />
                                            </linearGradient>
                                        </defs>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Location</h4>
                                    <span className="text-muted-foreground font-light text-sm">Dambulla Rd, Matale, Sri Lanka</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/charith-siriwardana-b796182a4/" target="_blank" rel="noreferrer">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/_charith.siriwardane_?igsh=bGdyM2V3ajlhcnFk" target="_blank" rel="noreferrer">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form ref={formRef} className="space-y-6" onSubmit={onSubmit} noValidate>
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium mb-1 text-left">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={cn(
                                        "w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors",
                                        errors.name ? "border-red-500 focus:ring-red-500" : "border-input"
                                    )}
                                    placeholder="Your Name..."
                                    onChange={() => errors.name && setErrors(prev => ({ ...prev, name: "" }))}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-xs text-red-500 text-left">{errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-xs font-medium mb-1 text-left">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={cn(
                                        "w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors",
                                        errors.email ? "border-red-500 focus:ring-red-500" : "border-input"
                                    )}
                                    placeholder="example@gmail.com"
                                    onChange={() => errors.email && setErrors(prev => ({ ...prev, email: "" }))}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-500 text-left">{errors.email}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-xs font-medium mb-1 text-left">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className={cn(
                                        "w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none transition-colors",
                                        errors.message ? "border-red-500 focus:ring-red-500" : "border-input"
                                    )}
                                    placeholder="Your Message..."
                                    rows={2}
                                    onChange={() => errors.message && setErrors(prev => ({ ...prev, message: "" }))}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-xs text-red-500 text-left">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                onClick={handleSendClick}
                                disabled={isLoading}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2 relative transition-opacity cursor-pointer",
                                    isLoading && "opacity-80 cursor-not-allowed"
                                )}
                            >
                                {isLoading ? (
                                    <>
                                        {/* Spinner */}
                                        <svg
                                            className="animate-spin h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
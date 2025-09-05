import {ThemeToggle} from "@/component/ThemeToggle.jsx";
import {StarBackground} from "@/component/StarBackground.jsx";
import {Navar} from "@/component/Navar.jsx";
import {HeroSection} from "@/component/HeroSection.jsx";
import {AboutSection} from "@/component/AboutSection.jsx";
import {SkillsSection} from "@/component/SkillsSection.jsx";
import {ProjectSection} from "@/component/ProjectSection.jsx";
import {ContactSection} from "@/component/ContactSection.jsx";
import {Footer} from "@/component/Footer.jsx";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Theme Toggle*/}
            {/*Background Effects*/}
            <StarBackground />
            {/*Navbar*/}
            <Navar />
            {/*Main content*/}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
            </main>
            {/*Footer*/}
            <Footer />
        </div>
    );
}
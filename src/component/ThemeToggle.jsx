import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/util.js";

export const ThemeToggle = ({ className }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "flex items-center p-1 rounded-full transition-all duration-500",
                "backdrop-blur-md border border-white/20 shadow-lg",
                "w-20 h-9 sm:w-18 sm:h-9",
                isDarkMode
                    ? "bg-gradient-to-r from-[#141E30]/90 to-[#243B55]/90"
                    : "bg-gradient-to-r from-[#f5bcca]/80 to-[#f6e6ff]/80",
                className // allow extra classes from parent
            )}
        >
      <span
          className={cn(
              "flex items-center justify-center rounded-full shadow-md transition-all duration-500",
              "w-7 h-7 sm:w-8 sm:h-8",
              "backdrop-blur-md",
              isDarkMode
                  ? "translate-x-7 sm:translate-x-8 bg-gradient-to-r from-yellow-400 to-yellow-300"
                  : "translate-x-0 bg-gradient-to-r from-blue-500 to-blue-700"
          )}
      >
        {isDarkMode ? (
            <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        ) : (
            <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        )}
      </span>
        </button>
    );
};
import {ArrowUp} from "lucide-react";

export const Footer = () => {
  return (
      <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
          <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Charith.co. All rights reserved.
          </p>

         <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
             <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="url(#arrow-gradient)"
                 strokeWidth={2}
             >
                 <defs>
                     <linearGradient id="arrow-gradient" x1="0" y1="0" x2="1" y2="0">
                         <stop offset="0%" stopColor="#FF5A57" />
                         <stop offset="50%" stopColor="#E02F57" />
                         <stop offset="100%" stopColor="#6700A3" />
                     </linearGradient>
                 </defs>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
             </svg>
         </a>
      </footer>
  )
}
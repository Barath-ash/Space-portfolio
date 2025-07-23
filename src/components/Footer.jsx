import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="py-12 px-4 bg-gradient-to-r from-[#0a0f1c] to-[#121826] 
      border-t border-primary/20 mt-12 pt-8 flex flex-wrap justify-between items-center 
      text-sm text-muted-foreground backdrop-blur-md shadow-inner"
    >
      <p className="text-sm text-muted-foreground text-glow">
        &copy; {new Date().getFullYear()} <span className="text-primary">Barath D</span>. All rights reserved.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 
        shadow-md hover:shadow-[0_0_10px_rgba(139,92,246,0.4)]"
        title="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-transparent"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
            <span className="opacity-0 animate-fade-in text-muted-foreground">
              Hi, I'm
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Barath
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}D
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-glow">
            Front-end developer with a solid foundation in full-stack web technologies and proficient in Java with a strong grasp of OOP.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button shadow-md hover:shadow-[0_0_12px_rgba(139,92,246,0.8)]">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary drop-shadow-[0_0_6px_rgba(139,92,246,0.7)]" />
      </div>
    </section>
  );
};

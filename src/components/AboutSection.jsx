import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-glow">
              Front-end Developer & Full-Stack Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a front-end developer with a strong foundation in full-stack web technologies,
              especially experienced in building responsive user interfaces using React and Tailwind CSS.
            </p>

            <p className="text-muted-foreground">
              With a passion for clean code, Java, and problem-solving, I focus on developing impactful
              solutions that are both scalable and maintainable. I thrive in collaborative environments and
              enjoy learning new tech to stay ahead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Barath_main_resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1f2b] to-[#12161e] border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-700/20">
                  <Code className="h-6 w-6 text-purple-300" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground text-glow">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building full-stack web applications using React, Node.js, Express, and MongoDB with modern UI/UX.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1f2b] to-[#12161e] border border-yellow-400/30 shadow-[0_0_20px_rgba(253,224,71,0.2)] backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-yellow-400/20">
                  <User className="h-6 w-6 text-yellow-300" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground text-glow">Java</h4>
                  <p className="text-muted-foreground">
                  Proficient in Java, leveraging OOP to solve problems and build efficient solutions.
                            </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1f2b] to-[#12161e] border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-cyan-400/20">
                  <Briefcase className="h-6 w-6 text-cyan-300" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground text-glow">Project Execution</h4>
                  <p className="text-muted-foreground">
                    Contributed to academic and personal projects from design to deployment, applying Git and Agile practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

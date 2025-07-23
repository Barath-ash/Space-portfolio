import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Travel-Booking Website",
    description: "MERN app with auth, Stripe payments, and a responsive dashboard.",
    image: "/projects/project1.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Subscription Tracker API",
    description: "REST API for managing subscriptions with JWT and validation.",
    image: "/projects/project2.png",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Insomnia"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Pokedex Frontend App",
    description: "React app using Firebase Auth and Firestore for data storage.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "Firebase", "Firestore"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-glow">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A glimpse at some of my full-stack and frontend work built with modern tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-md card-hover transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-md shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-glow">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>

                <div className="flex justify-between items-center pt-2">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
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
            href="https://github.com/Barath-ash"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

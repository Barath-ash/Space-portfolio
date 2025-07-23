 import { Github, Code, FolderGit2, FileCode2, Medal } from "lucide-react";

export const StatsSection = () => {
  return (
    <section id="stats" className="py-24 px-4 bg-background relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
          My <span className="text-primary">Coding Stats</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A quick glance at my coding habits, contributions, and problem-solving progress.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* GitHub Section */}
          <div className="space-y-6 bg-gradient-to-br from-[#1a1f2b] to-[#12161e] border border-purple-500/30 rounded-xl p-8 shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-purple-700/20">
                <Github className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground text-glow">
                GitHub Overview
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <FolderGit2 className="h-4 w-4 text-purple-400" />
                <span>Repos:</span>
                <strong className="text-foreground">10+</strong>
              </div>
              <div className="flex items-center gap-2">
                <FileCode2 className="h-4 w-4 text-purple-400" />
                <span>Contributions:</span>
                <strong className="text-foreground">500+</strong>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-purple-400" />
                <span>Commits (2025):</span>
                <strong className="text-foreground">200+</strong>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border shadow-inner mt-6">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Barath-ash&show_icons=true&theme=transparent&hide_title=true&include_all_commits=true"
                alt="GitHub Stats"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* LeetCode Section */}
          <div className="space-y-6 bg-gradient-to-br from-[#1a1f2b] to-[#12161e] border border-yellow-400/30 rounded-xl p-8 shadow-[0_0_20px_rgba(253,224,71,0.2)] backdrop-blur-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-yellow-400/20">
                <Code className="h-6 w-6 text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground text-glow">
                LeetCode Progress
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Medal className="h-4 w-4 text-green-400" />
                <span>Easy:</span>
                <strong className="text-foreground">150+</strong>
              </div>
              <div className="flex items-center gap-2">
                <Medal className="h-4 w-4 text-yellow-400" />
                <span>Medium:</span>
                <strong className="text-foreground">100+</strong>
              </div>
              <div className="flex items-center gap-2">
                <Medal className="h-4 w-4 text-red-400" />
                <span>Hard:</span>
                <strong className="text-foreground">25+</strong>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border shadow-inner mt-6 max-h-[300px] sm:max-h-[280px]">
              <img
                src="https://leetcard.jacoblin.cool/BARATH-D?theme=dark&font=baloo&ext=activity"
                alt="LeetCode Stats"
                className="w-full object-contain"
                style={{ maxHeight: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

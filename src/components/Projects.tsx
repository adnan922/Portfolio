import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Holiday Heed",
    subtitle: "Kashmir Tour Packages Website",
    description:
      "Built a full-stack travel agency website using Next.js and TypeScript featuring dynamic tour package listings, a seasonal travel guide, and an inquiry/quote form for customer lead generation. Deployed on Vercel with 13+ production deployments; implemented responsive UI with CSS and integrated SpeedInsights for performance monitoring.",
    tags: ["Next.js", "TypeScript", "Vercel", "CSS"],
    link: "https://holiday-heed.vercel.app",
    featured: true,
  },
  {
    title: "VideoQuery AI",
    subtitle: "Interactive Video Questioning Using Qwen2-VL-2B",
    description:
      "Built an interactive video understanding system enabling natural-language queries over video frames using Qwen2-VL-2B-Instruct with frame extraction, temporal reasoning, and Q&A for educational use cases.",
    tags: ["Qwen2-VL", "Video AI", "NLP", "Deep Learning", "Python"],
    github: "https://github.com/adnan922",
    featured: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-12">
        <p className="mono text-primary text-sm tracking-wider mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold">Things I've Built</h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="card-glass rounded-2xl p-8 md:p-10 relative overflow-hidden group"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />

            <div className="relative z-10">
              {project.featured && (
                <span className="mono text-primary text-xs tracking-wider mb-4 block">
                  Featured Project
                </span>
              )}

              <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
              <p className="text-primary font-medium mb-4">{project.subtitle}</p>

              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag mono text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {project.github && (
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="hover:text-primary gap-2"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.link && (
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="hover:text-primary gap-2"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
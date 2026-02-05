import { ArrowDown, Github, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-up">
          <p className="mono text-primary text-sm tracking-wider mb-4">
            Hello, I'm
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up-delay-1">
          Adnan Rasool
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-up-delay-2">
          <span className="gradient-text font-semibold">AI/ML Engineer</span>
        </h2>

        <p className="max-w-xl mx-auto text-muted-foreground mb-8 animate-fade-up-delay-3 leading-relaxed">
          Specializing in production RAG systems, Azure AI Services, and LLM applications.
          Building intelligent solutions that bridge the gap between cutting-edge AI and
          real-world applications.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-muted-foreground animate-fade-up-delay-3">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary" />
            Model Town, Sopore, India
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up-delay-3">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 border-border hover:border-primary hover:text-primary"
          >
            <a href="/Resume.pdf" download>
              Download CV
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full hover:text-primary"
          >
            <a
              href="https://github.com/adnan922"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

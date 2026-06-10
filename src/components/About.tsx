import { Brain, Cloud, Code2, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Expertise in ML, deep learning, and LLM applications",
  },
  {
    icon: Sparkles,
    title: "RAG Systems",
    description: "Building production-ready retrieval augmented generation and semantic search",
  },
  {
    icon: Cloud,
    title: "Azure AI Services",
    description: "Leveraging cloud AI and the OpenAI API for scalable solutions",
  },
  {
    icon: Code2,
    title: "Full-Stack Dev",
    description: "Skilled in web development with Next.js and TypeScript",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="mono text-primary text-sm tracking-wider mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Crafting Intelligent Solutions
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm an AI/ML Engineer with hands-on experience building production RAG systems using Azure AI Services and the OpenAI API. My expertise spans machine learning, deep learning, LLM applications, prompt engineering, and retrieval pipeline optimization.
            </p>
            <p>
              Beyond my core focus in artificial intelligence, I am also highly skilled in full-stack web development with Next.js and TypeScript. This dual expertise allows me to bridge the gap between cutting-edge AI backend systems and responsive, user-friendly frontend interfaces, delivering complete, end-to-end intelligent solutions.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="card-glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
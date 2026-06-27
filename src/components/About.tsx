import { Brain, Cloud, Code2, Server } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Expertise in ML, deep learning, RAG systems, and LLM applications",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Designing RESTful APIs with Node.js, Express.js, Prisma, and PostgreSQL",
  },
  {
    icon: Cloud,
    title: "Cloud & AI Services",
    description: "Deploying scalable solutions using Azure AI, OpenAI, and vector search",
  },
  {
    icon: Code2,
    title: "Frontend & Full-Stack",
    description: "Building responsive web applications using Next.js, React, and TypeScript",
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
              I'm an AI/ML Engineer and Full-Stack Developer with a passion for building end-to-end intelligent solutions. My experience ranges from designing production RAG systems using Azure Cognitive Search and Azure OpenAI[cite: 2], to architecting robust backend REST APIs with Node.js, Express.js, Prisma ORM, and PostgreSQL[cite: 2].
            </p>
            <p>
              With a strong foundation in Python, TypeScript, and JavaScript[cite: 2], I bridge the gap between cutting-edge artificial intelligence and scalable software engineering. Whether I am building semantic search pipelines, developing complex role-based access control systems, or designing responsive Next.js interfaces[cite: 2], I thrive on crafting reliable, user-focused applications from the database to the deployment stage.
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
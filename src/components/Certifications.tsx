import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Deeplearning.AI & Stanford University",
    year: "2024",
  },
  {
    title: "Machine Learning A-Z",
    issuer: "Udemy",
    year: "2023",
  },
  {
    title: "Azure ML Studio Pipelines",
    issuer: "Microsoft",
    year: "2023",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="section-container bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <p className="mono text-primary text-sm tracking-wider mb-3 text-center">
          Professional Development
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="card-glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group animate-fade-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
              <span className="mono text-xs text-primary">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

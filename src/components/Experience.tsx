import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "L1 Quality Analyst (AI/ML Engineer & QA)",
    company: "ARS Portable Agnostic Solutions Pvt. Ltd.",
    location: "Remote",
    period: "Jul. 2025 - Feb. 2026",
    achievements: [
      "Designed and deployed an internal RAG system using Azure Cognitive Search and Azure OpenAI, enabling end users to query product documentation through natural language Q&A",
      "Built retrieval pipelines with semantic search using vector embeddings and fine-tuned query prompts, improving retrieval accuracy and significantly reducing manual document lookup time",
      "Contributed to small-scale feature development and end-to-end bug detection and fixing across AI-powered systems, working across the full cycle from development to user acceptance testing",
      "Conducted quality assurance testing across AI-powered pipelines and collaborated with teams on automation improvements and prompt-flow pipeline optimization",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-12">
        <p className="mono text-primary text-sm tracking-wider mb-3">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold">Where I've Worked</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card-glass rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-primary font-medium gap-2">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
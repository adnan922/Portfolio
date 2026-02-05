import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <p className="mono text-primary text-sm tracking-wider mb-3">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold">Where I've Worked</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Work Experience */}
        <div className="card-glass rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">L1 Quality Analyst</h3>
                  <p className="text-primary">ARS Portable Agnostic Solutions Pvt. Ltd.</p>
                </div>
                <span className="mono text-sm text-muted-foreground mt-2 md:mt-0">
                  Jul 2025 – Jan 2026
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  Designed and deployed an internal RAG system using Azure Cognitive Search,
                  Azure OpenAI, and prompt-flow pipelines enabling intelligent document
                  retrieval and Q&A capabilities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  Managed end-to-end RAG operations including prompt engineering, retrieval
                  optimization, and response quality validation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  Developed retrieval pipelines with semantic search using vector embeddings
                  and fine-tuned query prompts for improved accuracy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  Conducted quality assurance testing across AI-powered systems and
                  collaborated with teams on automation improvements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

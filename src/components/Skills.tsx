const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "TypeScript"],
  },
  {
    title: "AI / ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "RAG Systems",
      "LLMs",
      "NLP",
      "Computer Vision",
      "Prompt Engineering",
    ],
  },
  {
    title: "Web Dev",
    skills: ["Next.js", "React", "Streamlit","Node.js"],
  },
  {
    title: "Cloud & Tools",
    skills: ["Azure AI Services", "Azure OpenAI", "Azure Cognitive Search", "Vercel"],
  },
  {
    title: "Frameworks",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain"],
  },
  {
    title: "Specializations",
    skills: [
      "Retrieval Augmented Generation",
      "Vector Embeddings",
      "Semantic Search",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <p className="mono text-primary text-sm tracking-wider mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold">Technologies I Work With</h2>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="card-glass rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
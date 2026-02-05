import { GraduationCap, School } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Central University of Kashmir",
    period: "2021 - 2025",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Government Boys Higher Secondary School Sopore",
    period: "Completed",
    icon: School,
  },
  {
    degree: "Secondary (10th)",
    institution: "Netherfield School Sopore",
    period: "Completed",
    icon: School,
  },
];

export const Education = () => {
  return (
    <section id="education" className="section-container">
      <div className="max-w-4xl mx-auto">
        <p className="mono text-primary text-sm tracking-wider mb-3 text-center">
          Academic Background
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              className="card-glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <edu.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <span className="mono text-sm text-primary">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-1">{edu.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Mail, Phone, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sofiadnan92@gmail.com",
    href: "mailto:sofiadnan92@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6006910879",
    href: "tel:+916006910879",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/adnan922",
    href: "https://github.com/adnan922",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Model Town, Sopore, India",
    href: null,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-2xl mx-auto text-center">
        <p className="mono text-primary text-sm tracking-wider mb-3">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          I'm currently open to new opportunities and interesting projects.
          Whether you have a question or just want to say hi, feel free to reach out
          — I'll do my best to get back to you!
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contactLinks.map((link) => (
            <div
              key={link.label}
              className="card-glass rounded-xl p-5 text-left group hover:border-primary/50 transition-all duration-300"
            >
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                    <p className="font-medium">{link.value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2"
        >
          <a href="mailto:sofiadnan92@gmail.com">
            <Send className="w-4 h-4" />
            Say Hello
          </a>
        </Button>
      </div>
    </section>
  );
};

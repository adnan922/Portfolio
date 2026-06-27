import { Mail, Phone, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sofiadnan92@gmail.com",
    href: "mailto:sofiadnan92@gmail.com",
  },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: "+91 6006910879",
  //   href: "tel:+91",
  // },
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
      <div className="max-w-7xl mx-auto text-center">
        <p className="mono text-primary text-sm tracking-wider mb-3">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
          I'm currently open to new opportunities and interesting projects.
          Whether you have a question or just want to say hi, feel free to reach out
          — I'll do my best to get back to you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link) => (
            <div
              key={link.label}
              className="card-glass rounded-2xl p-8 text-left group hover:border-primary/50 transition-all duration-300"
            >
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center text-center gap-4 sm:flex-row sm:text-left sm:items-start h-full"
                >
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors shrink-0">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="mt-1 flex-1">
                    <p className="text-sm text-muted-foreground mb-1.5">{link.label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:text-left sm:items-start h-full">
                  <div className="p-4 bg-primary/10 rounded-xl shrink-0">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="mt-1 flex-1">
                    <p className="text-sm text-muted-foreground mb-1.5">{link.label}</p>
                    <p className="font-semibold">{link.value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 h-auto text-lg gap-3"
        >
          <a href="mailto:sofiadnan92@gmail.com">
            <Send className="w-5 h-5" />
            Say Hello
          </a>
        </Button>
      </div>
    </section>
  );
};
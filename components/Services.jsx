import { Code, Palette, Rocket, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Building responsive and performant web applications using modern technologies and best practices.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications that provide seamless user experiences.",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful interfaces that enhance user engagement and satisfaction.",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Technical Consulting",
    description:
      "Providing expert advice on technology stack selection and architecture design.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your specific needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
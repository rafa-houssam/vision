import { Code, Palette, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces with attention to detail.",
    icon: Palette,
  },
  {
    title: "SEO Optimization",
    description: "Optimizing websites for search engines to increase visibility and traffic.",
    icon: Globe,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const experiences = [
  {
    company: "Tech Corp",
    position: "Senior Frontend Developer",
    period: "2020 - Present",
    description: "Led the development of multiple web applications using React and Next.js.",
  },
  {
    company: "Digital Agency",
    position: "Full Stack Developer",
    period: "2018 - 2020",
    description: "Developed and maintained various client projects using modern web technologies.",
  },
  {
    company: "Startup Inc",
    position: "Junior Developer",
    period: "2016 - 2018",
    description: "Started my journey as a web developer working on various frontend projects.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.position}</CardTitle>
                    <CardDescription className="mt-2">{exp.company}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="mt-4 text-muted-foreground">{exp.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
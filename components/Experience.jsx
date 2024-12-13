const experiences = [
  {
    company: "Tech Solutions Inc.",
    position: "Senior Full Stack Developer",
    period: "2020 - Present",
    description:
      "Led development of enterprise-level applications, mentored junior developers, and implemented CI/CD pipelines.",
  },
  {
    company: "Digital Innovations Co.",
    position: "Full Stack Developer",
    period: "2018 - 2020",
    description:
      "Developed and maintained multiple client projects using React, Node.js, and AWS.",
  },
  {
    company: "StartUp Labs",
    position: "Frontend Developer",
    period: "2016 - 2018",
    description:
      "Built responsive web applications and implemented modern UI/UX designs.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of success in delivering high-quality software solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2" />
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {exp.position}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <div className="text-primary mb-2">{exp.company}</div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
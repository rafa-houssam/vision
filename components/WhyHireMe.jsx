import { Brain, Rocket, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Problem Solver",
    description: "Analytical thinker with a proven track record of solving complex technical challenges.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Player",
    description: "Excellent communicator who thrives in collaborative environments.",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Fast Learner",
    description: "Quick to adapt to new technologies and methodologies.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Results Driven",
    description: "Focused on delivering high-quality solutions that drive business success.",
  },
];

const WhyHireMe = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Hire Me?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's what sets me apart and makes me the ideal candidate for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="text-primary mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
import { Check } from "lucide-react";

const reasons = [
  "5+ years of professional experience",
  "Strong problem-solving skills",
  "Excellent communication",
  "Proven track record of successful projects",
  "Up-to-date with latest technologies",
  "Dedicated to continuous learning",
];

export function WhyHireMe() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Hire Me?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center space-x-3 bg-muted/50 p-4 rounded-lg">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
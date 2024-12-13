import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Turning Vision Into
              <span className="text-primary"> Digital Reality</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Senior Full Stack Developer specializing in building exceptional
              digital experiences that combine beautiful design with powerful
              functionality.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] opacity-50 blur-3xl pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
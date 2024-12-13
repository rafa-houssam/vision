import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div id="home" className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Turning Vision Into Reality With Code And Design.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button>
              Contact me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Code, ExternalLink, ChevronDown } from "lucide-react";
import Section from "./Section.js";
import { AnimatedCard, FadeIn } from "./AnimatedComponents.js";
import { useState } from "react";

const projects = [
  // ... existing code ...
];

export default function PortfolioSection() {
  return (
    <Section
      id="portfolio"
      title="My Projects"
      subtitle="Explore some of my recent work and the technologies I've been using."
      className="bg-muted/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 100}>
            <AnimatedCard className="group overflow-hidden h-full flex flex-col bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <Code className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="relative">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background/50 to-transparent group-hover:hidden" />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-background/80 text-foreground text-xs rounded-full font-medium border border-border hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
} 
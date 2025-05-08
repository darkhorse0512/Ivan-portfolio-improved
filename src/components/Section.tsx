import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
} 
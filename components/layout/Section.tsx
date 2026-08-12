import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "accent";
};

const variantStyles = {
  default: "bg-background",
  muted: "bg-muted/40",
  accent: "bg-secondary/50",
};

export function Section({
  id,
  children,
  className,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", variantStyles[variant], className)}
    >
      {children}
    </section>
  );
}

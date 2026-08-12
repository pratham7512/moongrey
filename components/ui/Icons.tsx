import {
  BedDouble,
  Compass,
  FileText,
  Headphones,
  Leaf,
  Map,
  Receipt,
  Shield,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  map: Map,
  users: Users,
  bed: BedDouble,
  compass: Compass,
  file: FileText,
  shield: Shield,
  sparkles: Sparkles,
  headphones: Headphones,
  receipt: Receipt,
  leaf: Leaf,
};

type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const LucideIconComponent = iconMap[name] ?? Map;
  return <LucideIconComponent className={className} />;
}

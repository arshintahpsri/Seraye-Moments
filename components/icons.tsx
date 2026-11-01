import {
  Archive,
  Bolt,
  Check,
  Clapperboard,
  Clock,
  Cloud,
  Film,
  FolderOpen,
  Heart,
  Images,
  Lightbulb,
  MapPin,
  Music,
  Palette,
  Users,
  Video,
  Wand2,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  archive: Archive,
  bolt: Bolt,
  bulb: Lightbulb,
  check: Check,
  clock: Clock,
  cloud: Cloud,
  crew: Clapperboard,
  film: Film,
  folder: FolderOpen,
  gallery: Images,
  heart: Heart,
  music: Music,
  palette: Palette,
  pin: MapPin,
  users: Users,
  video: Video,
  wand: Wand2,
};

export function Icon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Check;
  return <Cmp aria-hidden className={className} />;
}

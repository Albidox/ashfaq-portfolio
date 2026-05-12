import { Badge } from "@/components/ui/badge";

type ProjectStatusBadgeProps = {
  status: string;
};

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  return (
    <Badge className="border border-amber-300/20 bg-amber-300/10 text-amber-200 hover:bg-amber-300/10">
      {status}
    </Badge>
  );
}
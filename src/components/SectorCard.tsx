import { Card } from "@/components/ui/card";

interface SectorCardProps {
  title: string;
  value: string;
  percentage: number;
  growth: string;
}

export const SectorCard = ({ title, value, percentage, growth }: SectorCardProps) => {
  return (
    <Card className="p-5 bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-md transition-all duration-300">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-success/10 text-success">
            {growth}
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">Enterprises</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-primary">{percentage}%</p>
            <p className="text-xs text-muted-foreground">of total</p>
          </div>
        </div>
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full bg-gradient-primary transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </Card>
  );
};

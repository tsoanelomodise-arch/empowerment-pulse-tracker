import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  description?: string;
}

export const MetricCard = ({ title, value, change, icon: Icon, description }: MetricCardProps) => {
  return (
    <Card className="relative overflow-hidden bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {change && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-success/10 text-success">
              {change}
            </span>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold text-foreground">{value}</p>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          {description && (
            <p className="text-xs text-muted-foreground/80 pt-2">{description}</p>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary" />
    </Card>
  );
};

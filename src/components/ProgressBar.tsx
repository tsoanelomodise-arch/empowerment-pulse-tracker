import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  label: string;
  value: number;
  color?: "primary" | "success" | "warning" | "info";
}

export const ProgressBar = ({ label, value, color = "primary" }: ProgressBarProps) => {
  const colorClasses = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    info: "bg-info",
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-bold text-foreground">{value}%</span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={`h-full transition-all duration-500 ease-out rounded-full ${colorClasses[color]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

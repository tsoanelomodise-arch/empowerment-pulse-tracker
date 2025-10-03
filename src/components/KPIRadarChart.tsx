import { Card } from "@/components/ui/card";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from "recharts";

const data = [
  { subject: "Business Dev", value: 92 },
  { subject: "Skills Dev", value: 87 },
  { subject: "Market Access", value: 78 },
  { subject: "Financial Inc", value: 85 },
  { subject: "Black Own", value: 94 },
  { subject: "Women Emp", value: 76 },
  { subject: "Youth Dev", value: 68 },
  { subject: "Rural Dev", value: 72 },
];

export const KPIRadarChart = () => {
  return (
    <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border/50">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">Key Performance Indicators</h2>
        <p className="text-muted-foreground">Progress across critical transformation metrics</p>
      </div>
      <ResponsiveContainer width="100%" height={450}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]}
            tick={{ fill: "hsl(var(--muted-foreground))" }}
          />
          <Radar
            name="Performance %"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.6}
          />
          <Legend 
            wrapperStyle={{ paddingTop: "20px" }}
            formatter={(value) => <span className="text-foreground">{value}</span>}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
};

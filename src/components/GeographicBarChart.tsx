import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { MapPin } from "lucide-react";

const data = [
  { name: "Gauteng", enterprises: 847, percentage: 32 },
  { name: "Western Cape", enterprises: 623, percentage: 24 },
  { name: "KwaZulu-Natal", enterprises: 512, percentage: 19 },
  { name: "Eastern Cape", enterprises: 387, percentage: 15 },
  { name: "Other Provinces", enterprises: 478, percentage: 18 },
];

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--success))",
  "hsl(var(--accent))",
  "hsl(var(--info))",
  "hsl(var(--warning))",
];

export const GeographicBarChart = () => {
  return (
    <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border/50">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-lg bg-primary/10">
          <MapPin className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Geographic Reach</h3>
          <p className="text-sm text-muted-foreground">Nationwide footprint and impact</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="name" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
            angle={-15}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--foreground))" }}
            label={{ value: "Enterprises", angle: -90, position: "insideLeft", fill: "hsl(var(--foreground))" }}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                    <p className="font-semibold text-foreground">{payload[0].payload.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {payload[0].value} enterprises ({payload[0].payload.percentage}%)
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="enterprises" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

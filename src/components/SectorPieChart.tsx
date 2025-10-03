import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Manufacturing", value: 28, enterprises: 687 },
  { name: "Agriculture", value: 22, enterprises: 542 },
  { name: "Tourism", value: 19, enterprises: 456 },
  { name: "Technology", value: 16, enterprises: 384 },
  { name: "Retail", value: 13, enterprises: 312 },
  { name: "Construction", value: 10, enterprises: 234 },
  { name: "Energy", value: 6, enterprises: 156 },
  { name: "Healthcare", value: 5, enterprises: 124 },
];

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--success))",
  "hsl(var(--accent))",
  "hsl(var(--info))",
  "hsl(var(--warning))",
  "hsl(var(--secondary))",
  "hsl(var(--primary-glow))",
  "hsl(var(--muted-foreground))",
];

export const SectorPieChart = () => {
  return (
    <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border/50">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">Sector Distribution</h2>
        <p className="text-muted-foreground">Funding allocation across key economic sectors</p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                    <p className="font-semibold text-foreground">{payload[0].name}</p>
                    <p className="text-sm text-muted-foreground">
                      {payload[0].payload.enterprises} enterprises ({payload[0].value}%)
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value) => <span className="text-foreground text-sm">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

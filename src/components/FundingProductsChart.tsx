import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const data = [
  { name: "Strategic Projects", amount: 3.2, projects: 124, growth: 26 },
  { name: "SME Funding", amount: 4.1, projects: 2156, growth: 34 },
  { name: "Rural & Community", amount: 1.1, projects: 567, growth: 19 },
];

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--success))",
  "hsl(var(--info))",
];

export const FundingProductsChart = () => {
  return (
    <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border/50">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">Funding Products Performance</h2>
        <p className="text-muted-foreground">Disbursement breakdown by product category</p>
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
            label={{ value: "Amount (R billions)", angle: -90, position: "insideLeft", fill: "hsl(var(--foreground))" }}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
                    <p className="font-semibold text-foreground mb-2">{payload[0].payload.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Amount: R{payload[0].value}bn
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Projects: {payload[0].payload.projects}
                    </p>
                    <p className="text-sm text-success">
                      Growth: +{payload[0].payload.growth}%
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend 
            formatter={(value) => <span className="text-foreground">{value}</span>}
          />
          <Bar dataKey="amount" name="Funding (R billions)" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

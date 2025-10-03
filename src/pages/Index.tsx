import { MetricCard } from "@/components/MetricCard";
import { SectorPieChart } from "@/components/SectorPieChart";
import { GeographicBarChart } from "@/components/GeographicBarChart";
import { KPIRadarChart } from "@/components/KPIRadarChart";
import { FundingProductsChart } from "@/components/FundingProductsChart";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Building2, 
  Users, 
  DollarSign, 
  Target,
  Award
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAtMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              National Empowerment Fund
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Performance Report 2024 - Driving Economic Transformation and Empowerment Across South Africa
            </p>
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
              <Target className="w-4 h-4" />
              <span>Comprehensive overview of measurable impact and development outcomes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={DollarSign}
            title="Total Funding Disbursed"
            value="R8.4bn"
            change="+24%"
            description="Cumulative funding to date"
          />
          <MetricCard
            icon={Building2}
            title="Enterprises Funded"
            value="2,847"
            change="+18%"
            description="Active businesses supported"
          />
          <MetricCard
            icon={Users}
            title="Jobs Created"
            value="67,234"
            change="+31%"
            description="Direct & indirect employment"
          />
          <MetricCard
            icon={TrendingUp}
            title="Transformation Score"
            value="89.6%"
            change="+12%"
            description="B-BBEE compliance rate"
          />
        </div>
      </section>

      {/* Performance Indicators */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <KPIRadarChart />
      </section>

      {/* Sector Distribution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectorPieChart />
      </section>

      {/* Impact Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Transformation Outcomes</h3>
                <p className="text-sm text-muted-foreground">Key achievements in economic empowerment</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <h4 className="font-semibold text-foreground mb-1">Increased Productivity</h4>
                <p className="text-sm text-muted-foreground">Average 42% improvement across all funded enterprises</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <h4 className="font-semibold text-foreground mb-1">Enhanced Innovation</h4>
                <p className="text-sm text-muted-foreground">73% of enterprises adopted new technologies and processes</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <h4 className="font-semibold text-foreground mb-1">Community Impact</h4>
                <p className="text-sm text-muted-foreground">92% active participation in community development programs</p>
              </div>
            </div>
          </Card>

          <GeographicBarChart />
        </div>
      </section>

      {/* Funding Products Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <FundingProductsChart />
      </section>

      {/* Footer */}
      <footer className="bg-gradient-hero py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">National Empowerment Fund</h3>
          <p className="text-white/80 mb-6">Driving Economic Transformation Since 1998</p>
          <div className="flex items-center justify-center gap-8 text-white/60 text-sm">
            <span>Performance Report 2024</span>
            <span>•</span>
            <span>www.nefcorp.co.za</span>
            <span>•</span>
            <span>info@nefcorp.co.za</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

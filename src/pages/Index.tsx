import { MetricCard } from "@/components/MetricCard";
import { ProgressBar } from "@/components/ProgressBar";
import { SectorCard } from "@/components/SectorCard";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Building2, 
  Users, 
  DollarSign, 
  Target,
  Award,
  MapPin,
  Briefcase
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
        <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border/50">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Key Performance Indicators</h2>
            <p className="text-muted-foreground">Progress across critical transformation metrics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ProgressBar label="Business Development" value={92} color="primary" />
              <ProgressBar label="Skills Development" value={87} color="success" />
              <ProgressBar label="Market Access" value={78} color="info" />
              <ProgressBar label="Financial Inclusion" value={85} color="warning" />
            </div>
            <div className="space-y-6">
              <ProgressBar label="Black Ownership" value={94} color="primary" />
              <ProgressBar label="Women Empowerment" value={76} color="success" />
              <ProgressBar label="Youth Development" value={68} color="info" />
              <ProgressBar label="Rural Development" value={72} color="warning" />
            </div>
          </div>
        </Card>
      </section>

      {/* Sector Distribution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Sector Distribution</h2>
          <p className="text-muted-foreground">Funding allocation across key economic sectors</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SectorCard
            title="Manufacturing"
            value="687"
            percentage={28}
            growth="+22%"
          />
          <SectorCard
            title="Agriculture"
            value="542"
            percentage={22}
            growth="+18%"
          />
          <SectorCard
            title="Tourism & Hospitality"
            value="456"
            percentage={19}
            growth="+25%"
          />
          <SectorCard
            title="Technology & Innovation"
            value="384"
            percentage={16}
            growth="+42%"
          />
          <SectorCard
            title="Retail & Services"
            value="312"
            percentage={13}
            growth="+15%"
          />
          <SectorCard
            title="Construction"
            value="234"
            percentage={10}
            growth="+12%"
          />
          <SectorCard
            title="Energy & Mining"
            value="156"
            percentage={6}
            growth="+8%"
          />
          <SectorCard
            title="Healthcare"
            value="124"
            percentage={5}
            growth="+28%"
          />
        </div>
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
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
                <span className="font-medium text-foreground">Gauteng</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">847 enterprises</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">32%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
                <span className="font-medium text-foreground">Western Cape</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">623 enterprises</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">24%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
                <span className="font-medium text-foreground">KwaZulu-Natal</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">512 enterprises</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">19%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
                <span className="font-medium text-foreground">Eastern Cape</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">387 enterprises</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">15%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
                <span className="font-medium text-foreground">Other Provinces</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">478 enterprises</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">18%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Funding Products Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Funding Products Performance</h2>
          <p className="text-muted-foreground">Disbursement breakdown by product category</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Strategic Projects</h3>
                <p className="text-2xl font-bold text-foreground mb-2">R3.2bn</p>
                <p className="text-xs text-muted-foreground mb-3">Large-scale transformational projects</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">124 projects</span>
                  <span className="font-semibold text-success">+26%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-success/10">
                <Building2 className="w-6 h-6 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">SME Funding</h3>
                <p className="text-2xl font-bold text-foreground mb-2">R4.1bn</p>
                <p className="text-xs text-muted-foreground mb-3">Small and medium enterprise support</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">2,156 businesses</span>
                  <span className="font-semibold text-success">+34%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-info/10">
                <Users className="w-6 h-6 text-info" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Rural & Community</h3>
                <p className="text-2xl font-bold text-foreground mb-2">R1.1bn</p>
                <p className="text-xs text-muted-foreground mb-3">Rural development initiatives</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">567 projects</span>
                  <span className="font-semibold text-success">+19%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
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

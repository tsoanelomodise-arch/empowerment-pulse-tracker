import { MetricCard } from "@/components/MetricCard";
import { ProgressBar } from "@/components/ProgressBar";
import { SectorCard } from "@/components/SectorCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Building2,
  Users,
  Target,
  Award,
  MapPin,
  Briefcase,
  HandCoins,
  GraduationCap,
  BadgeCheck,
  Download,
  ArrowDown,
} from "lucide-react";
import nefLogo from "@/assets/nef-logo.png";
import heroLandscape from "@/assets/hero-landscape.jpg";
import { REPORT_YEAR, reportTitle } from "@/config/report";

const SectionLabel = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono-label text-xs text-primary">{number}</span>
    <span className="h-px flex-1 bg-border max-w-16" />
    <span className="font-mono-label text-xs text-muted-foreground">{title}</span>
  </div>
);

const Index = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ====== HERO ====== */}
      <section className="relative min-h-screen p-4 md:p-6 lg:p-8 bg-[#1a1410]">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroLandscape}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>

        {/* Framed inner content (editorial border reference) */}
        <div className="relative min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] border border-white/40 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 lg:p-14 flex flex-col">
          {/* Top bar */}
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={nefLogo} alt="National Empowerment Fund" className="h-10 md:h-12 w-auto" />
              <span className="hidden sm:inline font-display text-white text-lg tracking-wider">NEF.</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 font-mono-label text-xs text-white/90">
              <a href="#metrics" className="hover:text-primary transition-colors">Metrics</a>
              <a href="#milestones" className="hover:text-primary transition-colors">Milestones</a>
              <a href="#sectors" className="hover:text-primary transition-colors">Sectors</a>
              <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
            </nav>
            <span className="hidden md:inline font-mono-label text-xs text-white/70">{REPORT_YEAR}</span>
          </header>

          {/* Side caption */}
          <div className="hidden lg:flex absolute left-14 top-1/2 -translate-y-1/2 flex-col gap-3 font-display text-white text-3xl xl:text-4xl leading-tight">
            <span>Drive.</span>
            <span>Transform.</span>
            <span>Empower.</span>
          </div>

          {/* Main hero title */}
          <div className="flex-1 flex flex-col justify-end pb-6">
            <div className="max-w-5xl ml-auto text-right">
              <h1 className="font-display text-white text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.85]">
                PERFORMANCE
                <br />
                REPORT {REPORT_YEAR}
              </h1>
              <p className="mt-6 text-white/85 text-base md:text-lg max-w-xl ml-auto">
                Driving Economic Transformation and Empowerment Across South Africa
              </p>
              <div className="mt-4 flex items-center justify-end gap-2 text-white/70 text-sm">
                <Target className="w-4 h-4" />
                <span>Comprehensive overview of measurable impact and development outcomes</span>
              </div>
              <div className="mt-8 flex justify-end no-print">
                <Button
                  onClick={handleDownloadPDF}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF Report
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex items-center gap-3 font-mono-label text-xs text-white/80">
              <span className="block w-px h-10 bg-white/60" />
              <span>Scroll</span>
            </div>
            <ArrowDown className="w-5 h-5 text-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ====== KEY METRICS ====== */}
      <section id="metrics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <SectionLabel number="01" title="Key Metrics" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={HandCoins}
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

      {/* ====== LIFE TO DATE MILESTONES ====== */}
      <section id="milestones" className="bg-[#1a1410] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono-label text-xs text-primary">02</span>
            <span className="h-px flex-1 bg-white/20 max-w-16" />
            <span className="font-mono-label text-xs text-white/60">Legacy</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] max-w-3xl">
              Life to Date<br />Performance Milestones
            </h2>
            <p className="text-white/70 md:text-right max-w-sm">
              Since operations began in 2005 (as of 31 May 2025)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { icon: HandCoins, label: "Approved", value: "R12.8bn", caption: "for black entrepreneurs" },
              { icon: GraduationCap, label: "Reached", value: "158,000+", caption: "people through community seminars on how to save and invest" },
              { icon: Building2, label: "Projects worth", value: "R45.2bn", caption: "coinvested to support black industrialists" },
              { icon: Users, label: "Over", value: "142,000", caption: "jobs created and sustained" },
              { icon: BadgeCheck, label: "Achieved", value: "20 Years", caption: "of clean external audits" },
              { icon: TrendingUp, label: "Over", value: "R3.8bn", caption: "has been repaid by investees" },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-[#1a1410] p-8 md:p-10 hover:bg-[#231a14] transition-colors group"
              >
                <m.icon className="w-7 h-7 text-primary mb-8" strokeWidth={1.5} />
                <p className="font-mono-label text-xs text-white/50 mb-3">{m.label}</p>
                <p className="font-display text-5xl md:text-6xl mb-4 group-hover:text-primary transition-colors">
                  {m.value}
                </p>
                <p className="text-sm text-white/70 leading-relaxed">{m.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== KPIs ====== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionLabel number="03" title="Performance" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-4">
              Key Performance Indicators
            </h2>
            <p className="text-muted-foreground">
              Progress across critical transformation metrics
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <ProgressBar label="Business Development" value={92} color="primary" />
            <ProgressBar label="Black Ownership" value={94} color="primary" />
            <ProgressBar label="Skills Development" value={87} color="success" />
            <ProgressBar label="Women Empowerment" value={76} color="success" />
            <ProgressBar label="Market Access" value={78} color="info" />
            <ProgressBar label="Youth Development" value={68} color="info" />
            <ProgressBar label="Financial Inclusion" value={85} color="warning" />
            <ProgressBar label="Rural Development" value={72} color="warning" />
          </div>
        </div>
      </section>

      {/* ====== SECTORS ====== */}
      <section id="sectors" className="bg-muted/40 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionLabel number="04" title="Distribution" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="font-display text-4xl md:text-6xl leading-[0.9] max-w-2xl">
              Sector Distribution
            </h2>
            <p className="text-muted-foreground md:text-right max-w-sm">
              Funding allocation across key economic sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SectorCard title="Manufacturing" value="687" percentage={28} growth="+22%" />
            <SectorCard title="Agriculture" value="542" percentage={22} growth="+18%" />
            <SectorCard title="Tourism & Hospitality" value="456" percentage={19} growth="+25%" />
            <SectorCard title="Technology & Innovation" value="384" percentage={16} growth="+42%" />
            <SectorCard title="Retail & Services" value="312" percentage={13} growth="+15%" />
            <SectorCard title="Construction" value="234" percentage={10} growth="+12%" />
            <SectorCard title="Energy & Mining" value="156" percentage={6} growth="+8%" />
            <SectorCard title="Healthcare" value="124" percentage={5} growth="+28%" />
          </div>
        </div>
      </section>

      {/* ====== IMPACT ====== */}
      <section id="impact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionLabel number="05" title="Impact" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 md:p-10 bg-gradient-card backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">Transformation Outcomes</h3>
                <p className="text-sm text-muted-foreground">Key achievements in economic empowerment</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-background/60 border border-border/50 hover:border-primary/40 transition-colors">
                <h4 className="font-semibold text-foreground mb-1">Increased Productivity</h4>
                <p className="text-sm text-muted-foreground">Average 42% improvement across all funded enterprises</p>
              </div>
              <div className="p-5 rounded-xl bg-background/60 border border-border/50 hover:border-primary/40 transition-colors">
                <h4 className="font-semibold text-foreground mb-1">Enhanced Innovation</h4>
                <p className="text-sm text-muted-foreground">73% of enterprises adopted new technologies and processes</p>
              </div>
              <div className="p-5 rounded-xl bg-background/60 border border-border/50 hover:border-primary/40 transition-colors">
                <h4 className="font-semibold text-foreground mb-1">Community Impact</h4>
                <p className="text-sm text-muted-foreground">92% active participation in community development programs</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-10 bg-gradient-card backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">Geographic Reach</h3>
                <p className="text-sm text-muted-foreground">Nationwide footprint and impact</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { name: "Gauteng", count: "847 enterprises", pct: "32%" },
                { name: "Western Cape", count: "623 enterprises", pct: "24%" },
                { name: "KwaZulu-Natal", count: "512 enterprises", pct: "19%" },
                { name: "Eastern Cape", count: "387 enterprises", pct: "15%" },
                { name: "Other Provinces", count: "478 enterprises", pct: "18%" },
              ].map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between p-4 rounded-xl bg-background/60 border border-border/50 hover:border-primary/40 transition-colors"
                >
                  <span className="font-medium text-foreground">{p.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">{p.count}</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary min-w-[3rem] text-center">
                      {p.pct}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* ====== FUNDING PRODUCTS ====== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <SectionLabel number="06" title="Products" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.9] max-w-2xl">
            Funding Products Performance
          </h2>
          <p className="text-muted-foreground md:text-right max-w-sm">
            Disbursement breakdown by product category
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Briefcase, tint: "primary", title: "Strategic Projects", value: "R3.2bn", desc: "Large-scale transformational projects", count: "124 projects", change: "+26%" },
            { icon: Building2, tint: "success", title: "SME Funding", value: "R4.1bn", desc: "Small and medium enterprise support", count: "2,156 businesses", change: "+34%" },
            { icon: Users, tint: "info", title: "Rural & Community", value: "R1.1bn", desc: "Rural development initiatives", count: "567 projects", change: "+19%" },
          ].map((p) => (
            <Card
              key={p.title}
              className="group p-8 bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className={`inline-flex p-3 rounded-full bg-${p.tint}/10 mb-6`}>
                <p.icon className={`w-6 h-6 text-${p.tint}`} />
              </div>
              <h3 className="font-mono-label text-xs text-muted-foreground mb-3">{p.title}</h3>
              <p className="font-display text-5xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {p.value}
              </p>
              <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border/60 text-sm">
                <span className="text-muted-foreground">{p.count}</span>
                <span className="font-semibold text-success">{p.change}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="relative bg-[#1a1410] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border border-white/15 rounded-3xl p-10 md:p-16 text-center">
            <img src={nefLogo} alt="" className="h-14 mx-auto mb-6 opacity-90" />
            <h3 className="font-display text-3xl md:text-5xl mb-3">National Empowerment Fund</h3>
            <p className="text-white/70 mb-10">Driving Economic Transformation Since 1998</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono-label text-xs text-white/60">
              <span className="text-primary">{reportTitle(REPORT_YEAR)}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>www.nefcorp.co.za</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>info@nefcorp.co.za</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

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
              <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] break-words">
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
      <section id="metrics" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <SectionLabel number="01" title="Key Metrics" />

        {/* Editorial header row */}
        <div className="grid grid-cols-12 gap-6 mb-12 items-end border-b border-border pb-8">
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight">
              Key
              <br />
              Metrics
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <p className="font-mono-label text-xs text-muted-foreground mb-2">{REPORT_YEAR} / Snapshot</p>
            <p className="text-sm md:text-base text-muted-foreground max-w-sm md:ml-auto">
              Driving Economic Transformation and Empowerment Across South Africa
            </p>
          </div>
        </div>

        {/* Asymmetric infographic grid */}
        <div className="grid grid-cols-12 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {/* Feature card: Total Funding */}
          <div className="col-span-12 lg:col-span-7 bg-[#1a1410] text-white p-8 md:p-12 relative group">
            <div className="flex items-start justify-between mb-10">
              <div className="flex items-center gap-3">
                <HandCoins className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <span className="font-mono-label text-xs text-white/60">01 — Total Funding Disbursed</span>
              </div>
              <span className="font-mono-label text-xs px-3 py-1 rounded-full border border-primary/40 text-primary">+24%</span>
            </div>
            <p className="font-display text-7xl md:text-9xl lg:text-[11rem] leading-[0.85] group-hover:text-primary transition-colors">
              R8.4<span className="text-primary">bn</span>
            </p>
            <div className="mt-10 flex items-end justify-between gap-6 pt-6 border-t border-white/15">
              <p className="text-sm text-white/70 max-w-xs">Cumulative funding to date</p>
              <div className="hidden md:flex items-end gap-1 h-12">
                {[40, 55, 48, 70, 65, 82, 78, 95, 88, 100].map((h, i) => (
                  <span key={i} className="w-2 bg-primary/70 rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Right column: 3 stacked */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-px bg-border">
            {[
              { icon: Building2, num: "02", title: "Enterprises Funded", value: "2,847", change: "+18%", desc: "Active businesses supported" },
              { icon: Users, num: "03", title: "Jobs Created", value: "67,234", change: "+31%", desc: "Direct & indirect employment" },
              { icon: TrendingUp, num: "04", title: "Transformation Score", value: "89.6%", change: "+12%", desc: "B-BBEE compliance rate" },
            ].map((m) => (
              <div key={m.num} className="bg-background p-6 md:p-8 hover:bg-muted/40 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <m.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <span className="font-mono-label text-xs text-muted-foreground">{m.num} — {m.title}</span>
                  </div>
                  <span className="font-mono-label text-xs text-success">{m.change}</span>
                </div>
                <p className="font-display text-5xl md:text-6xl leading-[0.9] group-hover:text-primary transition-colors">
                  {m.value}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
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
      <section id="sectors" className="bg-[#f5f0e6] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionLabel number="04" title="Distribution" />

          {/* Editorial header */}
          <div className="grid grid-cols-12 gap-6 mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.85] text-[#1a1410]">
                Sector
                <br />
                Distribution
              </h2>
              <span className="block w-16 h-px bg-[#1a1410]/40 mt-6" />
            </div>
            <div className="col-span-12 md:col-span-5 md:text-right">
              <p className="text-base text-[#1a1410]/70 max-w-sm md:ml-auto leading-relaxed">
                Funding allocation across key economic sectors
              </p>
            </div>
          </div>

          {/* Infographic: stats list + concentric rings */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: top 4 with percentages */}
            <div className="col-span-12 lg:col-span-5 space-y-8 order-2 lg:order-1">
              {[
                { title: "Manufacturing", value: "687", percentage: 28, growth: "+22%" },
                { title: "Agriculture", value: "542", percentage: 22, growth: "+18%" },
                { title: "Tourism & Hospitality", value: "456", percentage: 19, growth: "+25%" },
                { title: "Technology & Innovation", value: "384", percentage: 16, growth: "+42%" },
              ].map((s) => (
                <div key={s.title} className="flex items-baseline gap-6 group">
                  <p className="font-display text-5xl md:text-6xl text-[#1a1410] group-hover:text-primary transition-colors w-28 shrink-0">
                    {s.percentage}%
                  </p>
                  <div className="flex-1 border-b border-[#1a1410]/15 pb-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl text-[#1a1410]">{s.title}</h3>
                      <span className="font-mono-label text-xs text-success shrink-0">{s.growth}</span>
                    </div>
                    <div className="flex items-baseline justify-between mt-1">
                      <p className="text-sm text-[#1a1410]/60">{s.value} Enterprises</p>
                      <span className="font-mono-label text-[10px] text-[#1a1410]/40">of total</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: concentric ring infographic */}
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 relative">
              <div className="relative aspect-square max-w-xl mx-auto">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {[
                    { r: 180, color: "#1a1410", op: 0.95 },
                    { r: 150, color: "#3a2f28", op: 0.85 },
                    { r: 120, color: "#5a4a3f", op: 0.75 },
                    { r: 90, color: "#8a7868", op: 0.7 },
                    { r: 60, color: "#F37021", op: 0.95 },
                  ].map((c, i) => (
                    <circle key={i} cx="200" cy="200" r={c.r} fill={c.color} opacity={c.op} />
                  ))}
                  <path
                    d="M 200 20 A 180 180 0 0 1 380 200 L 200 200 Z"
                    fill="#f5f0e6"
                    opacity="0.18"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom row: remaining 4 sectors */}
          <div className="mt-20 pt-10 border-t border-[#1a1410]/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
            {[
              { title: "Retail & Services", value: "312", percentage: 13, growth: "+15%" },
              { title: "Construction", value: "234", percentage: 10, growth: "+12%" },
              { title: "Energy & Mining", value: "156", percentage: 6, growth: "+8%" },
              { title: "Healthcare", value: "124", percentage: 5, growth: "+28%" },
            ].map((s) => (
              <div key={s.title} className="group">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-mono-label text-[10px] text-[#1a1410]/50">of total</span>
                  <span className="font-mono-label text-xs text-success">{s.growth}</span>
                </div>
                <p className="font-display text-4xl text-[#1a1410] group-hover:text-primary transition-colors">
                  {s.percentage}%
                </p>
                <h3 className="font-display text-lg text-[#1a1410] mt-2">{s.title}</h3>
                <p className="text-sm text-[#1a1410]/60 mt-1">{s.value} Enterprises</p>
              </div>
            ))}
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

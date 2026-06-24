import { useInView } from "@/hooks/use-in-view";

interface Kpi {
  label: string;
  value: number;
}

interface KpiChartProps {
  kpis: Kpi[];
  maxVal: number;
}

export const KpiChart = ({ kpis, maxVal }: KpiChartProps) => {
  const { ref: deskRef, inView: deskIn } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { ref: mobRef, inView: mobIn } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <>
      {/* Bar chart — desktop / tablet */}
      <div className="lg:col-span-7 hidden sm:block">
        <div
          ref={deskRef}
          className="relative h-[300px] md:h-[380px] flex items-end gap-2 md:gap-3 pl-2 border-b border-white/10"
        >
          {/* gridlines */}
          <div className="absolute inset-0 pointer-events-none">
            {[100, 75, 50, 25].map((g) => (
              <div
                key={g}
                className="absolute left-0 right-0 border-t border-dashed border-white/5 flex justify-end pr-1"
                style={{ bottom: `${g}%` }}
              >
                <span className="font-mono-label text-[9px] text-white/25 -translate-y-1/2 bg-transparent">
                  {g}
                </span>
              </div>
            ))}
          </div>
          {kpis.map((k, i) => {
            const isPeak = k.value === maxVal;
            return (
              <div
                key={k.label}
                className="group relative flex-1 flex flex-col items-center justify-end h-full"
              >
                <span
                  className={`font-display text-sm md:text-base mb-2 tabular-nums transition-opacity duration-500 ${
                    isPeak ? "text-[#F37021]" : "text-white/80"
                  } ${deskIn ? "opacity-100" : "opacity-0"}`}
                  style={{ transitionDelay: `${i * 70 + 350}ms` }}
                >
                  {k.value}%
                </span>
                <div
                  className={`relative w-full rounded-t-lg overflow-hidden transition-[height,filter] duration-[900ms] ease-out group-hover:brightness-110 ${
                    isPeak
                      ? "bg-gradient-to-t from-[#F37021] to-[#ff8a3d] shadow-[0_0_40px_rgba(243,112,33,0.4)]"
                      : "bg-white/[0.06] border border-white/10 border-b-0"
                  }`}
                  style={{
                    height: deskIn ? `${k.value}%` : "0%",
                    transitionDelay: `${i * 70}ms`,
                  }}
                >
                  {!isPeak && (
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "6px 6px",
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2 md:gap-3 pl-2 mt-4">
          {kpis.map((k) => (
            <div key={k.label} className="flex-1 text-center">
              <span className="font-mono-label text-[9px] md:text-[10px] tracking-wide text-white/50 leading-tight block">
                {k.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal bar list — mobile */}
      <div ref={mobRef} className="sm:hidden space-y-3">
        {kpis.map((k, i) => {
          const isPeak = k.value === maxVal;
          return (
            <div key={k.label}>
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="font-mono-label text-[10px] tracking-wide text-white/70">
                  {k.label}
                </span>
                <span
                  className={`font-display text-sm tabular-nums ${
                    isPeak ? "text-[#F37021]" : "text-white/90"
                  }`}
                >
                  {k.value}%
                </span>
              </div>
              <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-[width] duration-[900ms] ease-out ${
                    isPeak
                      ? "bg-gradient-to-r from-[#F37021] to-[#ff8a3d] shadow-[0_0_12px_rgba(243,112,33,0.6)]"
                      : "bg-white/40"
                  }`}
                  style={{
                    width: mobIn ? `${k.value}%` : "0%",
                    transitionDelay: `${i * 60}ms`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

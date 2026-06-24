import { useInView } from "@/hooks/use-in-view";

const rings = [
  { r: 180, color: "#1a1410", op: 0.95 },
  { r: 150, color: "#3a2f28", op: 0.85 },
  { r: 120, color: "#5a4a3f", op: 0.75 },
  { r: 90, color: "#8a7868", op: 0.7 },
  { r: 60, color: "#F37021", op: 0.95 },
];

export const SectorRings = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <div ref={ref} className="relative aspect-square max-w-xl mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
        {rings.map((c, i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={c.r}
            fill={c.color}
            opacity={inView ? c.op : 0}
            style={{
              transform: inView ? "scale(1)" : "scale(0.6)",
              transformOrigin: "200px 200px",
              transition: `transform 900ms cubic-bezier(0.22,1,0.36,1) ${i * 110}ms, opacity 700ms ease-out ${i * 110}ms`,
            }}
          />
        ))}
        <path
          d="M 200 20 A 180 180 0 0 1 380 200 L 200 200 Z"
          fill="#f5f0e6"
          opacity={inView ? 0.18 : 0}
          style={{ transition: "opacity 800ms ease-out 700ms" }}
        />
      </svg>
    </div>
  );
};

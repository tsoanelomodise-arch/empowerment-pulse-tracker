import { useInView } from "@/hooks/use-in-view";

interface HeroMiniBarsProps {
  values: number[];
}

export const HeroMiniBars = ({ values }: HeroMiniBarsProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  return (
    <div ref={ref} className="hidden md:flex items-end gap-1 h-12">
      {values.map((h, i) => (
        <span
          key={i}
          className="w-2 bg-primary/70 rounded-sm transition-[height] duration-[900ms] ease-out"
          style={{
            height: inView ? `${h}%` : "0%",
            transitionDelay: `${i * 60}ms`,
          }}
        />
      ))}
    </div>
  );
};

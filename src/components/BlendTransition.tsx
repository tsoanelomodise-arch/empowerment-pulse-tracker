/**
 * BlendTransition
 * A decorative gradient fade that dissolves the dark hero into the
 * cream Key Metrics background using irregular, blurred multicolored
 * blobs drawn from both palettes (warm dark, NEF orange, deep green,
 * cream). Pointer-events disabled; purely presentational.
 */
export const BlendTransition = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-56 md:h-72 lg:h-80 overflow-hidden z-20"
    >
      {/* Base vertical fade: hero dark -> metrics cream */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,20,16,0) 0%, rgba(26,20,16,0.35) 35%, hsl(45 30% 96% / 0.85) 78%, hsl(45 30% 96%) 100%)",
        }}
      />

      {/* Irregular blurred blobs — warm orange */}
      <div
        className="absolute -left-10 bottom-6 w-[55%] h-[140%] opacity-70 mix-blend-screen blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(23 95% 60% / 0.55), transparent 70%)",
          borderRadius: "62% 38% 47% 53% / 55% 43% 57% 45%",
          transform: "rotate(-8deg)",
          filter: "blur(48px)",
        }}
      />

      {/* Deep secondary green blob */}
      <div
        className="absolute right-[-8%] bottom-[-10%] w-[60%] h-[160%] opacity-60 mix-blend-screen"
        style={{
          background:
            "radial-gradient(closest-side, hsl(135 45% 38% / 0.55), transparent 70%)",
          borderRadius: "48% 52% 63% 37% / 42% 58% 42% 58%",
          transform: "rotate(12deg)",
          filter: "blur(56px)",
        }}
      />

      {/* Cream highlight blob anchored to bottom for seamless join */}
      <div
        className="absolute left-1/3 bottom-[-30%] w-[70%] h-[120%] opacity-95"
        style={{
          background:
            "radial-gradient(closest-side, hsl(45 30% 96% / 0.9), transparent 72%)",
          borderRadius: "52% 48% 40% 60% / 60% 40% 60% 40%",
          filter: "blur(40px)",
        }}
      />

      {/* Subtle warm accent for color variety */}
      <div
        className="absolute left-[35%] top-2 w-[35%] h-[90%] opacity-50 mix-blend-screen"
        style={{
          background:
            "radial-gradient(closest-side, hsl(38 92% 60% / 0.5), transparent 70%)",
          borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
};

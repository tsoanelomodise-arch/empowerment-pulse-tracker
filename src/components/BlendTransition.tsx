/**
 * BlendTransition
 * Decorative multicolored gradient fade dissolving the hero into the
 * Key Metrics background. Uses a custom palette (#525251, #8A8C8B,
 * #F8F6F2, #F37220, #575757) with irregular blurred blobs and
 * distortion. Pointer-events disabled; purely presentational.
 */
export const BlendTransition = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-56 md:h-72 lg:h-80 overflow-hidden z-20"
    >
      {/* Base vertical fade: hero dark -> neutral grey -> cream metrics bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(82,82,81,0) 0%, rgba(87,87,87,0.45) 30%, rgba(138,140,139,0.55) 55%, rgba(248,246,242,0.9) 82%, #F8F6F2 100%)",
        }}
      />

      {/* Warm orange blob — NEF accent */}
      <div
        className="absolute -left-[8%] bottom-4 w-[55%] h-[150%] opacity-70 mix-blend-screen"
        style={{
          background:
            "radial-gradient(closest-side, rgba(243,114,32,0.55), transparent 70%)",
          borderRadius: "62% 38% 47% 53% / 55% 43% 57% 45%",
          transform: "rotate(-8deg)",
          filter: "blur(52px)",
        }}
      />

      {/* Mid-grey blob */}
      <div
        className="absolute right-[-10%] bottom-[-15%] w-[60%] h-[160%] opacity-65 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(closest-side, rgba(138,140,139,0.7), transparent 70%)",
          borderRadius: "48% 52% 63% 37% / 42% 58% 42% 58%",
          transform: "rotate(10deg)",
          filter: "blur(60px)",
        }}
      />

      {/* Deep charcoal blob for depth */}
      <div
        className="absolute left-[20%] top-[-20%] w-[45%] h-[110%] opacity-55 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(closest-side, rgba(82,82,81,0.65), transparent 72%)",
          borderRadius: "55% 45% 38% 62% / 48% 55% 45% 52%",
          transform: "rotate(-14deg)",
          filter: "blur(58px)",
        }}
      />

      {/* Cream highlight anchored to bottom for seamless join */}
      <div
        className="absolute left-1/3 bottom-[-32%] w-[75%] h-[125%] opacity-95"
        style={{
          background:
            "radial-gradient(closest-side, rgba(248,246,242,0.95), transparent 72%)",
          borderRadius: "52% 48% 40% 60% / 60% 40% 60% 40%",
          filter: "blur(44px)",
        }}
      />

      {/* Subtle warm orange highlight for variety */}
      <div
        className="absolute left-[55%] top-2 w-[35%] h-[85%] opacity-45 mix-blend-screen"
        style={{
          background:
            "radial-gradient(closest-side, rgba(243,114,32,0.55), transparent 70%)",
          borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
          filter: "blur(64px)",
        }}
      />

      {/* Neutral grey #575757 distortion wash */}
      <div
        className="absolute left-[-5%] top-[10%] w-[40%] h-[80%] opacity-40 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(closest-side, rgba(87,87,87,0.6), transparent 72%)",
          borderRadius: "58% 42% 50% 50% / 52% 48% 52% 48%",
          transform: "rotate(6deg)",
          filter: "blur(70px)",
        }}
      />
    </div>
  );
};

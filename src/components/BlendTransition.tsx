/**
 * BlendTransition
 * Decorative multicolored gradient fade dissolving the hero into the
 * Key Metrics background. Uses a neutral custom palette (#525251,
 * #8A8C8B, #F8F6F2, #575757) with irregular blurred blobs and
 * distortion. Pointer-events disabled; purely presentational.
 */
export const BlendTransition = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-56 md:h-72 lg:h-80 overflow-hidden z-20"
    >
      {/* Base vertical fade: hero dark -> neutral greys -> cream metrics bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(82,82,81,0) 0%, rgba(87,87,87,0.5) 28%, rgba(138,140,139,0.6) 55%, rgba(248,246,242,0.92) 82%, #F8F6F2 100%)",
        }}
      />

      {/* Deep charcoal #525251 blob */}
      <div
        className="absolute -left-[8%] bottom-4 w-[55%] h-[150%] opacity-65 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(closest-side, rgba(82,82,81,0.7), transparent 70%)",
          borderRadius: "62% 38% 47% 53% / 55% 43% 57% 45%",
          transform: "rotate(-8deg)",
          filter: "blur(54px)",
        }}
      />

      {/* Mid-grey #8A8C8B blob */}
      <div
        className="absolute right-[-10%] bottom-[-15%] w-[60%] h-[160%] opacity-70 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(closest-side, rgba(138,140,139,0.75), transparent 70%)",
          borderRadius: "48% 52% 63% 37% / 42% 58% 42% 58%",
          transform: "rotate(10deg)",
          filter: "blur(60px)",
        }}
      />

      {/* Neutral #575757 distortion wash */}
      <div
        className="absolute left-[25%] top-[-20%] w-[45%] h-[110%] opacity-55 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(closest-side, rgba(87,87,87,0.65), transparent 72%)",
          borderRadius: "55% 45% 38% 62% / 48% 55% 45% 52%",
          transform: "rotate(-14deg)",
          filter: "blur(58px)",
        }}
      />

      {/* Cream #F8F6F2 highlight anchored to bottom for seamless join */}
      <div
        className="absolute left-1/3 bottom-[-32%] w-[75%] h-[125%] opacity-95"
        style={{
          background:
            "radial-gradient(closest-side, rgba(248,246,242,0.95), transparent 72%)",
          borderRadius: "52% 48% 40% 60% / 60% 40% 60% 40%",
          filter: "blur(44px)",
        }}
      />

      {/* Cream secondary highlight for soft variety */}
      <div
        className="absolute left-[55%] top-4 w-[35%] h-[85%] opacity-55 mix-blend-screen"
        style={{
          background:
            "radial-gradient(closest-side, rgba(248,246,242,0.7), transparent 70%)",
          borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
          filter: "blur(64px)",
        }}
      />

      {/* Subtle mid-grey overlay for added depth */}
      <div
        className="absolute left-[-5%] top-[10%] w-[40%] h-[80%] opacity-45 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(closest-side, rgba(138,140,139,0.6), transparent 72%)",
          borderRadius: "58% 42% 50% 50% / 52% 48% 52% 48%",
          transform: "rotate(6deg)",
          filter: "blur(70px)",
        }}
      />
    </div>
  );
};

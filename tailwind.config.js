/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "2rem",
          xl: "3rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
          "2xl": "1320px",
        },
      },
      colors: {
        // Базовая палитра бренда
        vusd: {
          bg: "#050816",
          bgSoft: "#070B1F",
          surface: "#0B1024",
          surfaceSoft: "#111827",
          border: "#1F2937",
          borderSoft: "#111827",
          primary: "#4F46E5",
          primarySoft: "#6366F1",
          accent: "#22D3EE",
          accentSoft: "#38BDF8",
          warning: "#F59E0B",
          danger: "#EF4444",
          success: "#10B981",
        },
      },
      textColor: {
        skin: {
          base: "#F9FAFB",
          muted: "#9CA3AF",
          softer: "#6B7280",
          accent: "#E5E7EB",
        },
      },
      backgroundImage: {
        "vusd-radial":
          "radial-gradient(circle at top, rgba(79,70,229,0.35), transparent 55%)",
        "vusd-overlay":
          "linear-gradient(to bottom, rgba(5,8,22,0.6), rgba(5,8,22,1))",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.45)",
        glow: "0 0 40px rgba(34,211,238,0.35)",
        "inner-glow": "inset 0 0 0 1px rgba(148,163,184,0.3)",
      },
      spacing: {
        section: "6rem",
        "section-lg": "7.5rem",
      },
      opacity: {
        15: "0.15",
      },
    },
  },
  plugins: [],
};

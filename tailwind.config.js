/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: "#2cf5c8",
        neonSoft: "#20c8a3",
        neonBlue: "#40f7ff",
        textMain: "#e5f3ff",
        muted: "#7c8799",
        bgDark: "#02040a"
      },
      boxShadow: {
        neon: "0 0 25px rgba(44, 245, 200, 0.35)"
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'system-ui', 'sans-serif'],
        monoRetro: ['VT323', 'monospace']
      }
    }
  },
  plugins: []
};

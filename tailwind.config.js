export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071426",
        ink: "#101827",
        gold: "#C9A24A",
        champagne: "#F8F1DE",
        porcelain: "#F7FAFC",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        premium: "0 24px 70px rgba(7, 20, 38, 0.16)",
        glow: "0 18px 50px rgba(201, 162, 74, 0.22)",
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(rgba(7,20,38,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,20,38,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        floatUp: "floatUp 0.8s ease both",
        shimmer: "shimmer 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

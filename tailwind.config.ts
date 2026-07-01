import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0e0d0b",
        ink2: "#171310",
        navy: "#1c2a37",
        navy2: "#16222d",
        brass: "#c9a24b",
        brassSoft: "#e3c887",
        brassDim: "#8b7136",
        cream: "#f3ecdd",
        creamDim: "#cfc6b2",
        wine: "#6e2a2a",
        wineDeep: "#421515"
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "serif"],
        body: ["Jost", "ui-sans-serif", "sans-serif"]
      },
      boxShadow: {
        panel: "0 40px 80px -30px rgba(0,0,0,0.65)"
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(ellipse 80% 55% at 50% 8%, rgba(201,162,75,0.10), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;

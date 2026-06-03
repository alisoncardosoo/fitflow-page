import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070707",
        graphite: "#101213",
        glass: "#181B1D",
        lime: "#C7FF4A",
        mist: "#E4FF9A",
        ice: "#F7F8F5",
        muted: "#A4A8AE"
      },
      boxShadow: {
        glow: "0 0 80px rgba(199, 255, 74, 0.12)",
        glass: "0 32px 90px rgba(0, 0, 0, 0.45)"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;

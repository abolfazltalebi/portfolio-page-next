import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Green: {
          "50": "#9eff00",
          "60": "#b1ff33",
          "70": "#c5ff66",
          "80": "#d8ff99",
          "90": "#ecffcc",
          "95": "#f5ffe5",
          "97": "#f9fff0",
          "99": "#fdfffa",
        },
        Grey: {
          "10": "#1a1a1a",
          "15": "#262626",
          "20": "#333333",
          "30": "#4c4c4d",
          "35": "#59595a",
          "40": "#656567",
          "60": "#98989a",
          "90": "#e6e6e6",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

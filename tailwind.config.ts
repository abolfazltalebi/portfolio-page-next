import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Purple": {
         "50": "#5700ff",
         "60": "#7833ff",
         "70": "#9a66ff",
         "80": "#bc99ff",
         "90": "#ddccff",
         "95": "#eee5ff",
         "97": "#f5f0ff",
         "99": "#fcfaff"
        },
        "Peach": {
         "85": "#e1dbd1",
         "90": "#ebe7e0",
         "92": "#eeebe5",
         "95": "#f5f3f0",
         "96": "#f7f6f3",
         "97": "#f9f8f6",
         "98": "#fbfaf9",
         "99": "#fdfdfc"
        },
        "Grey": {
         "10": "#1a1a1a",
         "20": "#333333",
         "30": "#4d4d4d",
         "40": "#666666",
         "50": "#808080",
         "60": "#999999",
         "70": "#b3b3b3",
         "80": "#cccccc"
        },
        "Other Colors": {
         "Purple": "#9e00ff",
         "Green": "#5edc11",
         "Yellow": "#ffce22",
         "Orange": "#ff7222",
         "Pink": "#ff22e9",
         "Blue": "#2260ff"
        }
       },
    },
  },
  plugins: [],
} satisfies Config;

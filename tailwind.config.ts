import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'principal': ["Times New Roman", "Sans-serif"],
        'secondary': ["Muli", "Sans-serif"],
        'cursive': ["Great Vibes", "Sans-serif"]
      },
      colors: {
        primary: 'white',
        secondary: '#C9511D',
      },
    },
  },
  plugins: [],
};
export default config;

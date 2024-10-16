import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "Light-Grayish-Cyan": "hsl(180, 31%, 95%)",
        "Dark-Grayish-Cyan": "hsl(180, 8%, 52%)",
        "Very-Dark-Grayish-Cyan": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
export default config;

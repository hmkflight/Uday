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
        sand: "#F8F6F3",
        pureWhite: "#FFFFFF",
        charcoal: "#2C2C2C",
        warmGray: "#6B6B6B",
        coastalTeal: "#52A096",
        warmBeige: "#EAE5DB",
      },
      maxWidth: {
        content: "640px",
        section: "1200px",
      },
      fontSize: {
        // Mobile sizes (default)
        "h1": "32px",
        "h2": "24px",
        "h3": "18px",
        "body": "16px",
        "small": "14px",
      },
      lineHeight: {
        "h1": "1.2",
        "h2": "1.3",
        "h3": "1.4",
        "body": "1.6",
        "small": "1.5",
      },
    },
  },
  plugins: [],
};

export default config;

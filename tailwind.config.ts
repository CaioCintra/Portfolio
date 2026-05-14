import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Projeto breakpoints
    "w-[90vw]",
    "sm:w-[calc(50%-0.75rem)]",
    "md:w-[calc(33.333%-0.75rem)]",
    "lg:w-[350px]",
    "xl:w-[400px]",
    "h-[200px]",
    "sm:h-[280px]",
    "md:h-[320px]",
    "lg:h-[400px]",
    "xl:h-[450px]",
    // Text sizes
    "text-[7vw]",
    "sm:text-[5vw]",
    "md:text-[4vw]",
    "lg:text-[5vw]",
    // Grid columns
    "grid-cols-2",
    "sm:grid-cols-3",
    "md:grid-cols-4",
    "lg:grid-cols-5",
    "xl:grid-cols-10",
    // Flex nowrap
    "flex-nowrap",
    "sm:flex-nowrap",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

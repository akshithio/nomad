import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cal: ["Cal Sans"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
} satisfies Config;

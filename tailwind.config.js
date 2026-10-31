/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        digilaka: {
          primary: "#0E7C7B",
          secondary: "#14B8A6",
          dark: "#0F172A",
          light: "#F8FAFC",
          accent: "#10B981",
        },
      },
      fontFamily: {
        sans: ["Vazirmatn", "Segoe UI", "Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
}

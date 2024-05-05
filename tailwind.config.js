/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('/image/bg-image.png')",
        topo: "url('/image/topography.png')",
      },
      boxShadow: {
        "3xl": "10px 7px 5px 1px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "hover-nav": "scale-nav .5s ease-in-out forwards",
      },
      colors: {
        "blue-primary": "#1A2349",
      },
      keyframes: {
        "scale-nav": {
          "0%": {
            transform: "scaleX(0)",
            innerWidth: "0",
            opacity: "0",
          },
          "100%": {
            transform: "scaleX(1)",
            innerWidth: "1/3",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};

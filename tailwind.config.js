/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // Your theme extensions here
        fontFamily: {
          sans: ["var(--font-inter)", "sans-serif"],
          serif: ["var(--font-cormorant)", "serif"],
        },
        // Any other customizations
      },
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/public/vite.svg')",
        'logo2': "url('/public/loading.svg')"
    },
    },
  },
  plugins: [],
}


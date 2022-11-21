/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx}", "./components/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        cameras: "url('/assets/camera.jpg')",
        form: "url('/assets/form-bg.png')",
      },
    },
  },
  plugins: [],
}

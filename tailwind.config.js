/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 0.2) infinite'
      }
    },
  },
  plugins: [require("daisyui")],
}

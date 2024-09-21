/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        kanit: ['kanit', 'sans-serif'],
        SUSE: ['SUSE','sans-serf'],
        Fira: ['Fira Sans', 'sans-serif'],
        Nunito: ['Nunito Sans', 'sans-serif'],
        Manrope: ['Manrope','sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        PTSerif: ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  plugins: [],
}





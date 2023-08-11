/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        yt: "repeat(auto-fit, minmax(250px,1fr))",
      },
      colors: {
        "yt-black": "#0f0f0f",
        "yt-red": "#FF0300",
        "yt-white": "#F1F1F1",
        "yt-light-black": "#272727",
        "yt-light": "#181818",
        "yt-light-1": "#212121",
        "yt-gray": "gray",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bgOrange: "#feaf00",
      bgYellow: "#f8d442",
      bgWhite: "#ffffff",
      bgBeige: "#f2eae1",
      bgGray: "#f8f8f8",
      textBlack: "#000000",
      textGray: "#6c6c6c",
      textLightGray: "#cdcdcd",
      lightBlue: "#f0f9ff",
      Blue: "#74c1ed",
      lightPink: "#fef6fb",
      Pink: "#ee95c5",
      lightYellow: "#fefbec",
      Yellow: "#f6c762",
    },
    extend: {
      gridTemplateColumns: {
        21: "repeat(21, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

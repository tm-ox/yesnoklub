module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    colors: {
      primary: "#F07605",
      secondary: "#F3F1F9",
      tertiary: "#111518",
      hover: "#FBA04B",
    },
    extend: {
      fontFamily: {
        display: ["BioRhyme Expanded", "serif;"],
        body: ["BioRhyme", "serif;"],
      },
      animation: {
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      dropShadow: {
        "3xl": "3px 3px 3px rgba(75, 189, 164, 0.5)",
      },
      rotate: {
        127: "127deg",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-textactive)",
          wrong: "var(--color-text-wrong)",
          bg: "var(--background-color)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          bgcol: "var(--background-color)",
        },
      },
    },
  },
  plugins: [],
};

const APP_THEHE = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};

const THEME = {
  [APP_THEHE.LIGHT]: {
    backgroundImage:
      "linear-gradient(180deg, rgba(28, 153, 223, 0.57) 2.08%, rgba(50, 181, 255, 0.1482) 81.77%)",
  },
  [APP_THEHE.DARK]: {
    backgroundImage:
      "linear-gradient(180deg, rgba(12, 11, 1, 0.57) 2.08%, rgba(0, 0, 0, 0.57) 81.77%)",
  },
};

export { APP_THEHE, THEME };

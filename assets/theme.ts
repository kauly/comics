import { ITheme } from "./typing";

const theme: ITheme = {
  colors: {
    primary: "#1e272e",
    secondary: "#fff",
  },
  space: ["0.4rem", "0.8rem", "1.6rem", "2.4rem"],
  breakpoints: ["40em", "64em"],
  fontSizes: ["1.4rem", "1.6rem", "2rem"],
  fontWeights: {
    small: 400,
    large: 700,
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 64px rgba(0, 0, 0, .125)",
  },
};

export default theme;

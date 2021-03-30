import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
    };
    space: Array<string>;
    breakpoints: Array<string>;
    fontSizes: Array<string>;
    fontWeights: {
      small: number;
      large: number;
    };
    shadows: {
      small: string;
      large: string;
    };
  }
}

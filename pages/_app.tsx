import { css, Global, ThemeProvider } from "@emotion/react";
import theme from "../assets/theme";
import StateProvider from "../components/StateProvider";

const globalStyles = (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css?family=Dekko|Lato:900|Rock+Salt");
      html {
        font-size: 10px;
      }
      body {
        box-sizing: border-box;
        margin: 0;
        height: 100vh;
        font-family: "Dekko", cursive;
        font-size: 1.6rem;
        background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
          #fff;
        background-size: 1rem, 100%;
      }
      #__next {
        height: 100vh;
      }
    `}
  />
);

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <StateProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StateProvider>
  </>
);

export default App;

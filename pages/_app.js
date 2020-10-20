import "../css/index.css";
import Router from "next/router";
import withGA from "next-ga";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withGA("UA-144126551-2", Router)(MyApp);

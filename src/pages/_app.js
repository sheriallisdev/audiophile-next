import "@styles/reset.scss";
import "@styles/globals.scss";

import { Layout } from "@components/common";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import CartProvider from "@context/CartContext";

const progress = new ProgressBar({
  size: 4,
  color: "#D87D4A",
  className: "progressBar",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", process.finish);

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;

import "@styles/reset.scss";
import "@styles/globals.scss";

import { Layout } from "@components/common";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

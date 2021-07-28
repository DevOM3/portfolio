import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/commons/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}
export default MyApp;

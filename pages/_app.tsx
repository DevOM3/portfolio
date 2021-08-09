import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/commons/Layout";
import { AnimatePresence } from "framer-motion";
import { StateProvider } from "../context/StateProvider";
import reducer, { initialState } from "../context/reducer";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </StateProvider>
  );
}
export default MyApp;

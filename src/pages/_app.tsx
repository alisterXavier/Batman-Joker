import "@/styles/globals.css";
import "@/styles/styles.sass";
import "@/styles/glitch.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store/store";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="main-wrapper relative z-1 w-screen min-h-screen overflow-hidden">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

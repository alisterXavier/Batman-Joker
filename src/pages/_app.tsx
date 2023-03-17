import "@/styles/globals.css";
import "@/styles/styles.sass";
import "@/styles/glitch.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { createContext, useState } from "react";

interface transitionAct {
  activateTransition: boolean;
  setActivateTransition: (
    value: boolean | ((preVar: boolean) => boolean)
  ) => void;
}

export const Transition = createContext({} as transitionAct);

export default function App({ Component, pageProps }: AppProps) {
  const [activateTransition, setActivateTransition] = useState<boolean>(false);

  return (
    <Transition.Provider value={{ activateTransition, setActivateTransition }}>
      <div className="main-wrapper relative z-1 w-screen min-h-screen overflow-hidden">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Transition.Provider>
  );
}

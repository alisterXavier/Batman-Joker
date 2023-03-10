import { useSelector } from "react-redux";
import { StoreInterface } from "@/types/types";
import { useRouter } from "next/router";

const Header = () => {
  const isTransitionActive = useSelector(
    (state: StoreInterface) => state.transition.jokerTransition
  );
  const route = useRouter().pathname
  return (
    <main
      className={`hero-section min-w-[100vw] h-[100vh] relative flex items-center justify-center ${
        isTransitionActive && "activate-glitch" 
      }`}
    >
      <h1 className="character-name text-[#0dd859] left-5 z-[1] text-[50px] lg:text-[100px] font-bold absolute">
        Joker
      </h1>

      <div className={`glitch lg:translate-x-[25%]`}>
        <div className="glitch__img joker-img"></div>
        <div className="glitch__img joker-img"></div>
        <div className="glitch__img joker-img"></div>
        <div className="glitch__img joker-img"></div>
        <div className="glitch__img joker-img"></div>
      </div>
    </main>
  );
};

export default Header;

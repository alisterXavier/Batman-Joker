import { useSelector } from "react-redux";
import { StoreInterface } from "@/types/types";

const Header = () => {
    const isTransitionActive = useSelector(
        (state: StoreInterface) => state.transition.jokerTransition
      );
  return (
    <main
      className={`hero-section min-w-[100vw] h-[100vh] relative flex items-center justify-center ${
        isTransitionActive && "activate-glitch"
      }`}
      data-hero
    >
      <h1 className="character-name left-5 z-[1] text-[50px] lg:text-[100px] font-bold absolute">
        Catwoman
      </h1>

      <div className={`glitch lg:translate-x-[25%]`}>
        <div className="glitch__img catwoman-img"></div>
        <div className="glitch__img catwoman-img"></div>
        <div className="glitch__img catwoman-img"></div>
        <div className="glitch__img catwoman-img"></div>
        <div className="glitch__img catwoman-img"></div>
      </div>
    </main>
  );
};

export default Header;

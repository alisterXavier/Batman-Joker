import { useSelector } from "react-redux";
import { StoreInterface } from "@/types/types";

const Header = () => {
  const isTransitionActive = useSelector(
    (state: StoreInterface) => state.transition.harleyTransition
  );
  return (
    <main
      className={`hero-section min-w-[100vw] h-[100vh] relative flex items-center justify-center ${
        isTransitionActive && "activate-glitch"
      }`}
      data-hero
    >
      <h1 className="character-name lg:text-[#781312] text-white left-[10%] z-[1] text-[70px] lg:text-[100px] font-bold absolute">
        Harley
      </h1>
      <h1 className="character-name text-[#781312] lg:text-white z-[1] translate-y-[60px] lg:translate-y-[80px] left-[40%] lg:left-[20%] text-[70px] lg:text-[100px] font-bold absolute">
        Quinn
      </h1>
      <div className={`glitch lg:translate-x-[25%]`}>
        <div className="glitch__img harley-img"></div>
        <div className="glitch__img harley-img"></div>
        <div className="glitch__img harley-img"></div>
        <div className="glitch__img harley-img"></div>
        <div className="glitch__img harley-img"></div>
      </div>
    </main>
  );
};

export default Header;

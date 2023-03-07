import { useSelector } from "react-redux";
import Navbar from "../components/bateman/NavBar/batmanNavbar";
import { StoreInterface } from "@/types/types";

const Home = () => {
  const isTransitionActive = useSelector(
    (state: StoreInterface) => state.transition.transition
  );
  return (
    <>
      <Navbar />
      <main
        className={`hero-section  min-w-[100vw] h-[100vh] relative flex items-center justify-center ${
          isTransitionActive && "activate-glitch"
        }`}
      >
        <h1 className="character-name text-[#e7b200] left-5 z-10 text-[100px] font-bold absolute">
          Batman
        </h1>

        <div className={`glitch translate-x-[25%]`}>
          <div className="glitch__img batman-img"></div>
          <div className="glitch__img batman-img"></div>
          <div className="glitch__img batman-img"></div>
          <div className="glitch__img batman-img"></div>
          <div className="glitch__img batman-img"></div>
        </div>
      </main>
    </>
  );
};

export default Home;

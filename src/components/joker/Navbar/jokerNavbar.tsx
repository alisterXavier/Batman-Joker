import Image from "next/image";
import batsymbol from "@p/assets/images/bat-symbol.png";
import { useRouter } from "next/router";
import { ActivateTransition } from "@/store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNavClick = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;
    document.querySelector(`[data-${id}]`)?.scrollTo({
      behavior: "smooth",
    });
  };

  const navTransition = () => {
    dispatch(ActivateTransition(true));
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  useEffect(() => {
    dispatch(ActivateTransition(false));
  }, []);

  return (
    <nav className="h-[10vh] z-[2] w-screen fixed top-0 backdrop-blur flex items-center text-[#0dd859]">
      <div className="logo-wrapper fixed left-2 top-full lg:top-0 lg:left-0 w-[20%] lg:w-[8%] lg:h-[100%] lg:relative flex items-center justify-center">
        <figure
          className="joker-symbol w-[100%] flex item-center justify-center overflow-hidden cursor-pointer"
          onClick={navTransition}
        >
          <Image alt="laugh" src={batsymbol} className="w-[70%]" />
        </figure>
      </div>
      <div className="flex text-xs lg:text-2xl">
        <div className="p-5">
          <p
            className="hover:underline cursor-pointer"
            onClick={handleNavClick}
            id="home"
          >
            Home
          </p>
        </div>
        <div className="p-5">
          <p
            className="hover:underline cursor-pointer"
            onClick={handleNavClick}
            id="variants"
          >
            Variants
          </p>
        </div>
        <div className="p-5">
          <p
            className="hover:underline cursor-pointer"
            onClick={handleNavClick}
            id="vehicles"
          >
            Vechiles
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import laugh from "@p/assets/images/laugh.png";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ActivateTransition } from "@/store/store";
import { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNavClick = (e : React.MouseEvent) => {
    document.querySelector(`[data-${e.currentTarget.id}]`)?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const navTransition = () => {
    dispatch(ActivateTransition(true));
    setTimeout(() => {
      router.push("/Joker");
    }, 2000);
  };
  
  useEffect(() => {
    dispatch(ActivateTransition(false));
  }, [])

  return (
    <nav className="h-[10vh] z-[2] w-screen fixed top-0 backdrop-blur flex items-center text-[#e7b200] justify-center lg:justify-start">
      <div className="logo-wrapper fixed left-2 top-full lg:top-0 lg:left-0 lg:relative w-[20%] lg:w-[8%] lg:h-[100%] flex items-center justify-center">
        <figure
          className="bat-symbol w-[100%] lg:overflow-hidden cursor-pointer"
          onClick={navTransition}
        >
          <Image alt="bat" src={laugh} className="w-full" />
        </figure>
      </div>
      <div className="flex text-xs lg:text-2xl">
        <div className="p-3 lg:p-5">
          <p className="hover:underline cursor-pointer" id="hero" onClick={(e) => handleNavClick(e)}>Home</p>
        </div>
        <div className="p-3 lg:p-5">
          <p className="hover:underline cursor-pointer" id="variants" onClick={(e) => handleNavClick(e)}>Variants</p>
        </div>
        <div className="p-3 lg:p-5">
          <p className="hover:underline cursor-pointer" id="vechiles" onClick={(e) => handleNavClick(e)}>Vehicles</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import batsymbol from "@p/assets/images/bat-symbol.png";
import { useRouter } from "next/router";
import { ActivateTransition } from "@/store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const navTransition = () => {
    dispatch(ActivateTransition(true));
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  useEffect(() => {
    dispatch(ActivateTransition(false));
  }, [])
  return (
    <nav className="h-[10vh] z-[1] w-screen absolute top-0 backdrop-blur flex items-center text-[#0dd859]">
      <div className="logo-wrapper w-[8%] h-[100%] relative flex items-center justify-center">
        <figure
          className="joker-symbol w-[100%] flex item-center justify-center overflow-hidden cursor-pointer"
          onClick={navTransition}
        >
          <Image alt="laugh" src={batsymbol} className="w-[70%] h-[50px]" />
        </figure>
      </div>
      <div className="flex">
        <div className="p-5">
          <p className="hover:underline cursor-pointer">Home</p>
        </div>
        <div className="p-5">
          <p className="hover:underline cursor-pointer">Suits</p>
        </div>
        <div className="p-5">
          <p className="hover:underline cursor-pointer">Variations</p>
        </div>
        <div className="p-5">
          <p className="hover:underline cursor-pointer">Vechiles</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

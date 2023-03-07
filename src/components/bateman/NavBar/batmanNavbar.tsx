import Image from "next/image";
import laugh from "@p/assets/images/laugh.png";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ActivateTransition } from "@/store/store";
import { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

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
    <nav className="h-[10vh] z-[1] w-screen absolute top-0 backdrop-blur flex items-center text-[#e7b200]">
      <div className="logo-wrapper w-[8%] h-[100%] relative flex items-center justify-center">
        <figure
          className="bat-symbol w-[100%] h-[50px] overflow-hidden cursor-pointer"
          onClick={navTransition}
        >
          <Image alt="bat" src={laugh} className="w-full" />
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

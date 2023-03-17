import { Transition } from "@/pages/_app";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const { activateTransition, setActivateTransition } = useContext(Transition);
  const handleNavClick = (e: React.MouseEvent) => {
    document.querySelector(`[data-${e.currentTarget.id}]`)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navTransition = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;
    document.querySelector(`[data-hero]`)?.scrollIntoView({
      behavior: "smooth",
    });
    document.querySelector(`[data-${id}]`)?.scrollIntoView({
      behavior: "smooth",
    });
    // if (id === "Harley") dispatch(HarleyTransition(true));
    // else if (id === "Catwoman") dispatch(CatTransition(true));
    // else
    setActivateTransition(true)

    setTimeout(() => {
      router.push(`/${id}`);
    }, 2000);
  };

  useEffect(() => {
    // if (router.pathname === "/Harley") dispatch(HarleyTransition(false));
    // else if (router.pathname === "/Catwoman") dispatch(CatTransition(false));
    // else
    setActivateTransition(false)
  }, [router]);

  return (
    <nav
      className={`h-[10vh] z-10 w-screen fixed top-0 backdrop-blur flex items-center justify-center lg:justify-start ${
        router.pathname === "/Joker"
          ? "text-[#0dd859] joker text-xs lg:text-2xl"
          : router.pathname === "/Harley"
          ? "text-[#781312] harley text-2xl lg:text-3xl"
          : router.pathname === "/Catwoman"
          ? "text-gray-600 catwoman text-xs lg:text-2xl"
          : "text-[#e7b200] batman text-xs lg:text-2xl"
      }`}
    >
      <div className="flex">
        <div className="p-2 lg:p-5">
          <p
            className="hover:underline cursor-pointer"
            id="hero"
            onClick={(e) => handleNavClick(e)}
          >
            Home
          </p>
        </div>
        <div className="p-2 lg:p-5">
          <p
            className="hover:underline cursor-pointer"
            id="variants"
            onClick={(e) => handleNavClick(e)}
          >
            Variants
          </p>
        </div>
        <div className="p-2 lg:p-5">
          <p
            className="hover:underline cursor-pointer"
            id="vechiles"
            onClick={(e) => handleNavClick(e)}
          >
            Vehicles
          </p>
        </div>
        <div className="p-2 lg:p-5">
          <p className="character-selection hover:underline cursor-pointer">
            Characters
          </p>
          <div
            className={`character-list absolute z-[1] w-full flex flex-wrap top-[100%] left-[0%] ${
              ["/Harley", "/Catwoman"].includes(router.pathname)  ? "text-md" : "text-sm"
            }`}
          >
            <p
              className="m-3 hover:underline cursor-pointer"
              onClick={(e) => {
                navTransition(e);
              }}
              id=""
            >
              Batman
            </p>
            <p
              className="m-3 hover:underline cursor-pointer"
              onClick={(e) => {
                navTransition(e);
              }}
              id="Joker"
            >
              Joker
            </p>
            <p
              className="m-3 hover:underline cursor-pointer"
              onClick={(e) => {
                navTransition(e);
              }}
              id="Harley"
            >
              Harley
            </p>
            <p
              className="m-3 hover:underline cursor-pointer"
              onClick={(e) => {
                navTransition(e);
              }}
              id="Catwoman"
            >
              Catwoman
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

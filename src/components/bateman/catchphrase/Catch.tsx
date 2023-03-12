import { useEffect, useRef } from "react";

const Catch = () => {


  return (
    <div className="quote relative z-[1] h-[300vh] text-2xl lg:text-7xl">
      <div className="quote-container w-screen h-screen bg-black flex items-center justify-center absolute top-0 z-[1] overflow-hidden">
        <div className="fixed z-[1] overflow-hidden">
          <h1 className="text-[#e7b200] w-[800px]">I am vengeance.</h1>
        </div>
      </div>

      <div className="quote-container w-screen h-screen bg-black flex items-center justify-center absolute top-[100vh] z-[2] overflow-hidden">
        <div className="fixed z-[2] top-[50%] overflow-hidden translate-y-[-49%]">
          <h1 className="text-[#e7b200] w-[800px]">I am the night.</h1>
        </div>
      </div>

      <div className="quote-container w-screen h-screen bg-black flex items-center justify-center absolute top-[200vh] z-[3] overflow-hidden">
        <div className="fixed z-[3] top-[50%] overflow-hidden translate-y-[-49%]">
          <h1 className="text-[#e7b200] w-[800px]">I am</h1>
        </div>
      </div>
    </div>
  );
};

{
  /* He's the hero Gotham deserves, but not the one it needs right now. 
  We all wear masks. */
}

export default Catch;
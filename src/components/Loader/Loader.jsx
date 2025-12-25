import { useEffect } from "react";
import { gsap } from "gsap";

const Loader = () => {
  useEffect(() => {
    gsap.to(".loader", {
      y: "-100%",
      duration: 2,
      delay: 1,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div className="loader fixed inset-0 bg-black text-white flex items-center justify-center z-50">
      <div className="text-center">
        {/* Statement */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Design<span className="text-accent">.</span> Build
          <span className="text-accent">.</span> Animate
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm uppercase tracking-widest text-gray-400">
          Crafting modern web experiences
        </p>

        {/* Loader bar */}
        <div className="mt-4 w-40 h-2 bg-gray-700 overflow-hidden mx-auto">
          <div className="loader-bar h-full bg-accent"></div>
        </div>

        {/* Hint */}
        <p className="mt-4 text-xs text-gray-400">
          Please wait…
        </p>
      </div>
    </div>
  );
};

export default Loader;

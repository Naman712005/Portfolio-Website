import { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-text", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-500px h-500px bg-accent/20 blur-[120px] rounded-full top-[-10%] right-[-10%]" />

      <div className="text-center max-w-4xl px-6 relative z-10">
        <p className="content hero-text uppercase tracking-widest text-sm text-muted mb-0">
          Full Stack Developer
        </p>

        <h1 className="heading hero-text text-6xl md:text-8xl font-extrabold leading-tight">
          Naman <span className="text-accent">Sah</span>
        </h1>

        <p className="content hero-text mt-6 text-lg md:text-xl text-slate-400">
          Building modern, scalable, and animated web experiences <br />
          using React, Node.js, and MongoDB.
        </p>

        <div className="hero-text mt-10 flex justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full border border-slate-600 hover:border-accent hover:text-accent transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-slate-600 hover:border-accent hover:text-accent transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

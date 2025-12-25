import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        scale: 0.85,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "back.out(1.4)",
        clearProps: "all",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-20 py-32 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-500px h-500px bg-accent/20 blur-[160px] rounded-full top-[10%] right-[-15%]" />

      {/* Header */}
      <div className="text-center mb-24 relative z-10">
        <h2 className="heading text-4xl md:text-5xl font-extrabold mb-6">
          Featured <span className="project-underline text-accent">Projects</span>
        </h2>
    
        <p className="content text-slate-400 max-w-2xl mx-auto mt-14">
          A selection of projects that demonstrate my ability to design, <br />
          build, and scale real-world applications.
        </p>
      </div>

      {/* FEATURED PROJECT */}
      <div className="project-card relative z-10 glass rounded-3xl p-10 mb-24 max-w-6xl mx-auto hover:border-accent transition">
        <span className="inline-block mb-4 text-xs uppercase tracking-widest text-accent">
          Featured Project
        </span>

        <h3 className="content text-3xl md:text-4xl font-bold mb-4">
          JLU-Orbit
        </h3>

        <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
          A scalable full-stack social networking platform built for academic
          collaboration. Includes JWT authentication, real-time notifications,
          research hubs, and modular group discussions.
        </p>

        <p className="mt-6 text-sm text-slate-400">
          Node.js • Express • MongoDB • Socket.io • JWT • Cloudinary
        </p>

        <div className="mt-8 flex gap-6">
          <a
            href="https://github.com/Naman712005/JLU-Orbit"
            className="px-8 py-3 rounded-full border border-slate-600 hover:border-accent hover:text-accent transition"
          >
            View Code
          </a>
          <a
            href="https://jlu-orbit.onrender.com/"
            className="px-8 py-3 rounded-full border border-slate-600 hover:border-accent hover:text-accent transition"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* OTHER PROJECTS */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* CaloriFyMe */}
        <div className="project-card glass p-8 rounded-2xl hover:border-accent hover:-translate-y-2 transition">
          <h3 className="content text-2xl font-semibold mb-3">
            CaloriFyMe
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Personalized nutrition tracker that generates weekly meal plans
            and performs real-time nutrient analysis using external APIs.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Java • MySQL • REST APIs
          </p>
          <div className="mt-6">
            <a href="https://github.com/Naman712005/CaloriFyMe" className="underline hover:text-accent transition">
              View Code
            </a>
          </div>
        </div>

        {/* Emotion Detection */}
        <div className="project-card glass p-8 rounded-2xl hover:border-accent hover:-translate-y-2 transition">
          <h3 className="content text-2xl font-semibold mb-3">
            Realtime Emotion Detection
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Real-time facial emotion detection system using deep learning
            models trained on the FER-2013 dataset.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Python • OpenCV • DeepFace • TensorFlow
          </p>
          <div className="mt-6">
            <a href="https://github.com/Naman712005/Realtime-Emotion-Detection" className="underline hover:text-accent transition">
              View Code
            </a>
          </div>
        </div>

        {/* Calculator */}
        <div className="project-card glass p-8 rounded-2xl hover:border-accent hover:-translate-y-2 transition md:col-span-2">
          <h3 className="content text-2xl font-semibold mb-3">
            Coding Calculator
          </h3>
          <p className="text-slate-300 leading-relaxed">
            A modern calculator application with support for advanced
            arithmetic operations and a clean, responsive UI.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            React.js • CSS
          </p>
          <div className="mt-6">
            <a href="https://github.com/Naman712005/Coding-Calculator" className="underline hover:text-accent transition">
              View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

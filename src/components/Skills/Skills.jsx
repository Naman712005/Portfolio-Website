import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-group", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        x: (i) => (i % 2 === 0 ? -80 : 80),
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        clearProps: "all",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-20 py-32 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-450px h-450px bg-accent/20 blur-[140px] rounded-full bottom-[-20%] right-[-10%]" />

      {/* Header */}
      <div className="text-center mb-24 relative z-10">
        <h2 className="heading text-4xl md:text-5xl font-extrabold mb-6">
          Technical <span className="skill-underline text-accent">Skills</span>
        </h2>

        <p className="content text-slate-400 max-w-2xl mx-auto mt-14">
          Tools, technologies, and frameworks I use to build scalable <br />
          and high-performance web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Frontend */}
        <div className="skill-group glass p-8 rounded-2xl hover:border-accent hover:-translate-y-2 transition">
          <h3 className="content text-xl font-semibold mb-4 flex items-center gap-3">
            <span className="text-accent text-2xl">⚛️</span>
            Frontend
          </h3>
          <p className="text-slate-300 leading-relaxed">
            HTML5, CSS3, JavaScript (ES6), React.js
          </p>
        </div>

        {/* Backend */}
        <div className="skill-group glass p-8 rounded-2xl hover:border-accent hover:-translate-y-2 transition">
          <h3 className="content text-xl font-semibold mb-4 flex items-center gap-3">
            <span className="text-accent text-2xl">🧠</span>
            Backend
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Node.js, Express.js, JWT Authentication, Socket.io
          </p>
        </div>

        {/* Databases */}
        <div className="skill-group glass p-8 rounded-2xl hover:border-accent hover:-translate-y-2 transition">
          <h3 className="content text-xl font-semibold mb-4 flex items-center gap-3">
            <span className="text-accent text-2xl">🗄️</span>
            Databases
          </h3>
          <p className="text-slate-300 leading-relaxed">MongoDB, MySQL</p>
        </div>

        {/* Languages */}
        <div className="skill-group glass p-8 rounded-2xl hover:border-accent hover:-translate-y-2 transition">
          <h3 className="content text-xl font-semibold mb-4 flex items-center gap-3">
            <span className="text-accent text-2xl">💻</span>
            Languages
          </h3>
          <p className="text-slate-300 leading-relaxed">
            C, C++, .NET, Java, Python
          </p>
        </div>

        {/* Frameworks */}
        <div className="skill-group glass p-8 rounded-2xl hover:border-accent hover:-translate-y-2 transition md:col-span-2 lg:col-span-1">
          <h3 className="content text-xl font-semibold mb-4 flex items-center gap-3">
            <span className="text-accent text-2xl">🧩</span>
            Frameworks & Architecture
          </h3>
          <p className="text-slate-300 leading-relaxed">
            MERN Stack, REST API Architecture, Mongoose ODM
          </p>
        </div>

        {/* Tools */}
        <div className="skill-group glass p-8 rounded-2xl hover:border-accent hover:-translate-y-2 transition">
          <h3 className="content text-xl font-semibold mb-4 flex items-center gap-3">
            <span className="text-accent text-2xl">🔧</span>
            Version Control
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Git, GitHub
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

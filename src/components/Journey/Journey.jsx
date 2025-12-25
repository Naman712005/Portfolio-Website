import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".journey-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
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
      <div className="absolute w-400px h-400px bg-accent/20 blur-[140px] rounded-full top-[20%] left-[-10%]" />

      {/* Header */}
      <div className="text-center mb-24 relative z-10">
        <h2 className="heading text-4xl md:text-5xl font-extrabold mb-6">
          My <span className="journey-underline text-accent">Journey</span>
        </h2>
        <p className="content text-slate-400 max-w-2xl mx-auto mt-14">
          A timeline of my academic foundation and growth as a full-stack
          developer.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-2px bg-linear-to-b from-accent/60 to-transparent -translate-x-1/2"></div>

        {/* Item 1 */}
        <div className="journey-item relative mb-24 flex justify-start md:justify-between items-center">
          <div className="hidden md:block w-5/12"></div>

          {/* Dot */}
          <span className="absolute left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 shadow-[0_0_20px_#22d3ee]"></span>

          {/* Card */}
          <div className="glass w-full md:w-5/12 p-6 rounded-xl hover:border-accent transition">
            <h3 className="content text-xl font-semibold">
              Bachelor of Computer Applications
            </h3>
            <p className="text-sm text-slate-400 mt-1"> 
              Jagran Lakecity University • 2023 – Present{" "} <br />
              <span className="text-accent font-medium">CGPA - 9.3</span>
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Reactjs, JWT Authentication, Socket.io, Advance Java (JSP, Servlets, JDBC)
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="journey-item relative mb-24 flex justify-start md:justify-between items-center">
          
          {/* Card */}
          <div className="glass w-full md:w-5/12 p-6 rounded-xl hover:border-accent transition">
            <h3 className="content text-xl font-semibold">
              Higher Secondary (Commerce)
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Shree Bhavans Bharti Public School • 2022 – 2023{" "} <br />
              <span className="text-accent font-medium">
                Percentage - 77.6%
              </span>
            </p>

            <p className="mt-3 text-slate-300">
              JavaScript, Nodejs, MySQL, Express, MongoDB
            </p>
          </div>

          {/* Dot */}
       <span className="hidden md:block absolute left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 shadow-[0_0_20px_#22d3ee]"></span>


          <div className="hidden md:block w-5/12"></div>
        </div>

        {/* Item 3 */}
        <div className="journey-item relative flex justify-start md:justify-between items-center">
          <div className="hidden md:block w-5/12"></div>

          {/* Dot */}
          <span className="absolute left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 shadow-[0_0_20px_#22d3ee]"></span>

          {/* Card */}
          <div className="glass w-full md:w-5/12 p-6 rounded-xl hover:border-accent transition">
            <h3 className="content text-xl font-semibold">Secondary Education</h3>
            <p className="text-sm text-slate-400 mt-1">
              Shree Bhavans Bharti Public School • 2020 – 2021{" "} <br />
              <span className="text-accent font-medium">
                Percentage - 73.8%
              </span>
            </p>

            <p className="mt-3 text-slate-300">HTML, CSS, Python & Liberaries (Tkinter, Turtle Graphics, Pygame)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

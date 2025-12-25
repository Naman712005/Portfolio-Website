import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-20 py-32 bg-[#0a0a0a] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-500px h-500px bg-accent/20 blur-[160px] rounded-full bottom-[-20%] left-[-15%]" />

      <div className="relative z-10 max-w-4xl text-center">
        {/* Heading */}
        <h2 className="contact-underline heading contact-item text-4xl md:text-6xl font-extrabold mb-6">
          Let’s <span className="text-accent">Work Together</span>
        </h2>

        <p className="content contact-item text-slate-400 md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed mt-14">
          I’m open to internships, collaborations, and full-stack development
          opportunities. If you have an idea or a role in mind, let’s talk.
        </p>

        {/* Contact Card */}
        <div className="contact-item glass rounded-3xl p-10 space-y-8 max-w-3xl mx-auto">
          {/* Email */}
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">
              Email
            </p>
            <a
              href="mailto:namansah712005@gmail.com"
              className="text-xl md:text-2xl font-semibold hover:text-accent transition"
            >
              namansah712005@gmail.com
            </a>
          </div>

          {/* Location */}
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">
              Location
            </p>
            <p className="text-lg text-slate-300">
              Bhopal, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 pt-6">
            <a
              href="https://www.linkedin.com/in/naman-sah-3479b8220/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-slate-600 hover:border-accent hover:text-accent transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Naman712005"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-slate-600 hover:border-accent hover:text-accent transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="content contact-item mt-14 text-sm text-slate-500">
          © {new Date().getFullYear()} Naman Sah — Built with React & GSAP
        </p>
      </div>
    </section>
  );
};

export default Contact;

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contacts = [
  {
    icon: "📧",
    label: "EMAIL",
    value: "hariharan10202@gmail.com",
    href: "mailto:hariharan10202@gmail.com",
  },
  {
    icon: "📱",
    label: "PHONE",
    value: "+91 9360709021",
    href: "tel:+919360709021",
  },
];

const links = [
  {
    icon: "💼",
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/hariharan-t-1447ba210/",
    description: "Professional network",
  },
  {
    icon: "💻",
    label: "GITHUB",
    href: "https://github.com/Hariharan10202",
    description: "Code repository",
  },
  {
    icon: "⚔️",
    label: "LEETCODE",
    href: "https://leetcode.com/u/hariharanstriver/",
    description: "Algorithm duels",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-12 md:py-24 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(122,26,26,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.5em] mb-4">
            ✦ SEND WORD ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-widest"
            style={{
              color: "#d4b896",
              textShadow: "0 0 30px rgba(194,103,42,0.3)",
            }}
          >
            CONTACT
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-[#c2672a]" />
            <span className="text-[#c2672a]">✦</span>
            <div className="h-px w-24 bg-linear-to-r from-[#c2672a] to-transparent" />
          </div>
          <p className="text-[#8b6914] text-base mt-4 max-w-md mx-auto italic western-content">
            "The frontier is vast, but word travels fast. Send a telegram and I
            shall respond in haste."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact cards */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="western-subtitle text-[#c2672a] text-xs tracking-[0.3em] mb-6"
            >
              — DIRECT TELEGRAPH —
            </motion.p>

            <div className="flex flex-col gap-4 mb-8">
              {contacts.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="contact-card p-5 flex items-center gap-4 group"
                >
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="western-content text-[#8b6914] text-xs tracking-wide mb-1">
                      {c.label}
                    </p>
                    <a
                      href={c.href}
                      className="western-subtitle text-[#d4b896] text-sm group-hover:text-[#c2672a] break-all"
                    >
                      {c.value}
                    </a>
                  </div>
                  <span className="ml-auto text-[#c2672a] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <a
                href="mailto:hariharan10202@gmail.com"
                className="inline-block px-8 py-4 text-xs western-subtitle tracking-[0.2em] transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #7a1a1a, #c2672a)",
                  border: "1px solid #c9942a",
                  color: "#d4b896",
                  boxShadow: "0 0 20px rgba(194, 103, 42, 0.3)",
                  textDecoration: "none",
                }}
              >
                ★ HIRE THE OUTLAW ★
              </a>
            </motion.div>
          </div>

          {/* Social links */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="western-subtitle text-[#c2672a] text-xs tracking-[0.3em] mb-6"
            >
              — OUTPOSTS & CAMPS —
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="contact-card p-5 text-center group"
                  style={{ textDecoration: "none" }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl mb-3">{link.icon}</div>
                  <p className="western-content text-[#c2672a] text-xs tracking-wide mb-1">
                    {link.label}
                  </p>
                  <p className="text-[#8b6914] text-sm italic western-content">
                    {link.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

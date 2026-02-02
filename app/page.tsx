"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Web & Mobile Design",
    image: "/img/179.png",
    description:
      "Human-centered interfaces, bold visual systems, and pixel-perfect UI built to convert.",
  },
  {
    title: "Web & No-Code Development",
    image: "/img/182.png",
    description:
      "Launch production-ready platforms on Webflow, Framer, and custom stacks in weeks.",
  },
  {
    title: "Brand Identity & Collaterals",
    image: "/img/278.png",
    description:
      "Identity, tone, and asset kits that keep every touchpoint consistent and recognizable.",
  },
  {
    title: "Product Strategy",
    image: "/img/188.png",
    description:
      "Roadmaps, user journeys, and product positioning that keep teams aligned and shipping.",
  },
];

const projects = [
  { title: "Dream AI", tag: "AI Platform", image: "/img/DreamAi.png" },
  { title: "Dryrunz", tag: "SaaS Launch", image: "/img/Dryrunz.png" },
  { title: "SongPact", tag: "Web App", image: "/img/SongPact.png" },
  {
    title: "Teambooster",
    tag: "Product Suite",
    image: "/img/Teambooster%20(1).png",
  },
];

const team = [
  { name: "Aaron Isreal", role: "CEO & Founder", image: "/img/porti.JPG" },
  { name: "Praise Aaron", role: "Mobile Consultant", image: "/img/praise.jpg" },
  {
    name: "Wuraola Adeyemi",
    role: "Social Media Manager",
    image: "/img/Gemini_Generated.png",
  },
  {
    name: "Oluwatosin Aborishade",
    role: "Design Engineer",
    image: "/img/Gemini_Generated_Image_m4lug9m4lug9m4lu.png",
  },
];

const testimonials = [
  {
    company: "FORMM.agency",
    image: "//20057f94c7266ade8a6e3c2f1e21a7c5.cdn.bubble.io/f1732181963824x320228977015167000/pic%20CMO.jpg",
    name: "Simion Foerstermann",
    role: "Founder and CMO",
    testimonial: "We highly recommend Israel for any software development projects. Our experience with him has consistently showcased his professionalism and reliability. We continue to work with Israel due to his outstanding expertise and commitment to delivering on time. An invaluable asset to our team.",
  },
  {
    company: "Podium X",
    image: "//20057f94c7266ade8a6e3c2f1e21a7c5.cdn.bubble.io/f1732181769963x829720204421032800/pic%20podium.jpg",
    name: "Yariv Erel",
    role: "CEO",
    testimonial: "I am currently working alongside Israel on a project centered around Bubble and AI learning development. His expertise in Bubble is truly commendable. Beyond his technical skills, Israel stands out with his incredible demeanor; he's a joy to work with, blending professionalism with a fun and friendly attitude. Our ongoing collaboration has been both productive and enjoyable, and his contributions continue to be invaluable to our team's success.",
  },
  {
    company: "TeamBooster",
    image: "//20057f94c7266ade8a6e3c2f1e21a7c5.cdn.bubble.io/f1732181349874x583453982736771500/pic%20teambooster.jpg",
    name: "Koen Veltman",
    role: "CEO",
    testimonial: "Israel has a very sharp mind and comes with strong ideas for me as an entrepreneur on improving the product we build. His core strength is to build new features in a very efficient way, it has amazed me how quickly those were developed. We have been working now for 6+ months together and I am looking forward to continuing. And above all our calls together are always fun and energized.",
  },
  {
    company: "SpaceTime",
    image: "//20057f94c7266ade8a6e3c2f1e21a7c5.cdn.bubble.io/f1732181170377x390138811815066160/spacetime.jpg",
    name: "Honorebel S. Walker",
    role: "Founder",
    testimonial: "Hiring a software engineer can be challenging, but Israel made the process seamless. He quickly grasped our vision and objectives, delivering our MVP within just three weeks. Israel's transparency and thorough understanding of the work required were invaluable. His communication across email, Zoom, Google Hangouts, and Slack was consistently clear and helpful.",
  },
  {
    company: "Safe",
    image: "//20057f94c7266ade8a6e3c2f1e21a7c5.cdn.bubble.io/f1732182423562x938177281851446700/pic%20serdev.jpg",
    name: "Ziphezinhle Gabuza",
    role: "Founder",
    testimonial: "I am thrilled to endorse my colleague, Israel Aaron. Having had the pleasure of collaborating on several projects, I've come to appreciate Israel's remarkable work ethic and innovative mindset. He effortlessly connects with people, ensuring client satisfaction is always a top priority. Israel's ability to quickly grasp and execute on project visions sets him apart as an outstanding developer.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050107] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050107]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image
            src="/img/codeless%20logo.svg"
            alt="Codeless"
            width={140}
            height={36}
            className="h-8 w-auto"
            priority
          />
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.28em] text-white/70 md:flex">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#team" className="transition hover:text-white">
              Team
            </a>
            <Link href="/learning" className="transition hover:text-white">
              Learning
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/subscribe"
              className="hidden h-[45px] w-[160px] items-center justify-center rounded-full bg-[#a855f7] text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_24px_rgba(168,85,247,0.55)] transition hover:shadow-[0_0_32px_rgba(168,85,247,0.85)] md:inline-flex"
            >
              Let&apos;s talk
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${
                    mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-opacity ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${
                    mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden border-t border-white/10 bg-[#050107]/95 backdrop-blur md:hidden"
            >
              <nav className="flex flex-col gap-4 px-6 py-4 text-sm uppercase tracking-[0.28em] text-white/70">
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="transition hover:text-white"
                >
                  Projects
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="transition hover:text-white"
                >
                  About
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="transition hover:text-white"
                >
                  Services
                </a>
                <a
                  href="#team"
                  onClick={() => setMobileMenuOpen(false)}
                  className="transition hover:text-white"
                >
                  Team
                </a>
                <Link
                  href="/learning"
                  onClick={() => setMobileMenuOpen(false)}
                  className="transition hover:text-white"
                >
                  Learning
                </Link>
                <Link
                  href="/subscribe"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex h-[45px] w-[160px] items-center justify-center rounded-full bg-[#a855f7] text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_24px_rgba(168,85,247,0.55)] transition hover:shadow-[0_0_32px_rgba(168,85,247,0.85)]"
                >
                  Let&apos;s talk
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="about" className="relative overflow-hidden px-6 pb-20 pt-14">
          {/* Animated gradient orbs */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.45),rgba(5,1,7,0))] blur-3xl"
            animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -left-24 top-24 h-[260px] w-[260px] rounded-full bg-[#a855f7]/25 blur-3xl"
            animate={{ y: [0, 22, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-10 right-[-120px] h-[240px] w-[240px] rounded-full bg-[#38bdf8]/20 blur-3xl"
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Additional animated elements */}
          <motion.div
            className="pointer-events-none absolute left-10 top-1/3 h-[180px] w-[180px] rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl"
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="pointer-events-none absolute right-20 top-1/4 h-[120px] w-[120px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-2xl"
            animate={{ rotate: [360, 0], scale: [1.2, 1, 1.2] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-20 left-1/4 h-[140px] w-[140px] rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-600/20 blur-2xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
          {/* Shimmer effect */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <div className="mx-auto flex max-w-6xl flex-col gap-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col items-center gap-6 text-center"
            >
              <h1 className="font-display text-[56px] font-semibold leading-[1.05] tracking-tight sm:text-[120px]">
                Build <span className="text-[#a855f7]">Smart.</span>
                <br />
                Launch <span className="text-[#a855f7]">Fast.</span> Grow
                <br />
                Without Code.
              </h1>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/subscribe"
                  className="glow-purple inline-flex h-[50px] w-[200px] items-center justify-center rounded-full bg-[#a855f7] text-sm font-semibold text-white transition hover:scale-[1.02]"
                >
                  Start a Project
                </Link>
                <a
                  href="#projects"
                  className="inline-flex h-[50px] w-[200px] items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  See our work
                </a>
              </div>
            </motion.div>

            <div className="relative mt-4">
              <motion.div
                className="relative mx-auto flex h-[480px] w-full max-w-4xl items-center justify-center sm:h-[520px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.55),rgba(5,1,7,0))] blur-3xl" />
                <motion.div
                  className="relative h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,rgba(168,85,247,0.98)_32%,rgba(59,130,246,0.7)_62%,rgba(5,1,7,0)_80%)] shadow-[0_0_200px_rgba(168,85,247,0.9)]"
                  animate={{ rotate: 360, scale: [0.95, 1.08, 0.95] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute left-[18%] top-[16%] h-20 w-20 rounded-full bg-white/70 blur-xl" />
                  <div className="absolute bottom-[18%] right-[14%] h-14 w-14 rounded-full bg-white/30 blur-lg" />
                  <div className="absolute inset-8 rounded-full border border-white/20" />
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="grid gap-8 text-sm text-muted sm:grid-cols-[1.4fr_0.6fr]"
            >
              <p>
                Codeless is a product design + no-code agency. We help startups and teams
                build, launch, and scale beautiful products and websites that communicate
                effectively.
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-full bg-[#1c1229] text-center text-sm leading-8 text-[#a855f7]">
                    50+
                  </span>
                  <div>
                    <p className="text-white">Launches</p>
                    <p className="text-xs text-muted">projects delivered</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-full bg-[#121f2b] text-center text-sm leading-8 text-[#5eead4]">
                    4.9
                  </span>
                  <div>
                    <p className="text-white">Rating</p>
                    <p className="text-xs text-muted">client reviews</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        <section id="services" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-4"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Services</p>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                A complete suite of services to launch and scale.
              </h2>
              <p className="text-sm text-muted">
                Strategy, design, and no-code development from a single senior team.
              </p>
            </motion.div>
            <div className="space-y-3">
              {services.map((service, index) => {
                const isActive = activeService === index;
                return (
                  <div key={service.title} className="panel-dark rounded-2xl px-5 py-4">
                    <button
                      type="button"
                      onClick={() => setActiveService(isActive ? null : index)}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={service.image}
                            alt="Service art"
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <span className="font-display text-lg font-semibold">
                          {service.title}
                        </span>
                      </div>
                      <div className="relative h-5 w-5">
                        <span
                          className={`absolute left-1/2 top-0 h-5 w-[2px] -translate-x-1/2 rounded-full bg-white/70 transition ${
                            isActive ? "scale-y-0" : "scale-y-100"
                          }`}
                        />
                        <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rounded-full bg-white/70" />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-sm text-muted">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-4"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Recent work</p>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Selected projects from the studio.
              </h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0a12] p-4 transition hover:border-[#a855f7]/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 520px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#a855f7]">
                        {project.title}
                      </p>
                      <p className="font-display text-lg font-semibold">{project.tag}</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-[#a855f7]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="px-6 py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-4"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Our team</p>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                The people behind the pixels.
              </h2>
              <p className="max-w-2xl text-sm text-muted">
                When you partner with Codeless, you get a close-knit team of designers and
                builders that communicate effectively.
              </p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="group panel-dark rounded-2xl p-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="font-display text-lg font-semibold">{member.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mb-12 text-center"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Testimonials</p>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                What our clients say
              </h2>
            </motion.div>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: [0, "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.name}-${index}`}
                    whileHover={{ scale: 1.02 }}
                    className="min-w-[350px] max-w-[350px] rounded-2xl border border-white/10 bg-[#0c0a12] p-6 shadow-lg"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-muted">
                          {testimonial.role} @ {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="relative flex h-[480px] flex-col justify-center overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.45),rgba(5,1,7,0.2)),linear-gradient(135deg,#1b0b28,#050107)] px-8 py-12 text-center"
            >
              <div className="absolute inset-0 opacity-60">
                <Image
                  src="/img/Rectangle%205378.png"
                  alt="Gradient"
                  fill
                  sizes="(max-width: 768px) 100vw, 980px"
                  className="object-cover mix-blend-screen blur-sm"
                />
              </div>
              <div className="relative space-y-4">
                <h3 className="font-display text-[40px] font-semibold leading-[1.05] sm:text-[90px]">
                  Have an idea? <br /> Let&apos;s talk.
                </h3>
                <p className="text-sm text-muted">
                  When you partner with Codeless, you get a team that communicates clearly
                  and ships quickly.
                </p>
                <Link
                  href="/subscribe"
                  className="glow-purple inline-flex h-[50px] w-[160px] items-center justify-center rounded-full bg-[#a855f7] text-sm font-semibold text-white"
                >
                  Book a call
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="learning" className="px-6 pb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.35),rgba(5,1,7,0.9))] px-6 py-12 text-center"
          >
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              Subscribe to <br /> our newsletter
            </h3>
            <p className="max-w-xl text-sm text-muted">
              Get product insights, no-code resources, and launch playbooks — delivered
              monthly.
            </p>
            <Link
              href="/subscribe"
              className="glow-purple inline-flex h-[50px] w-[160px] items-center justify-center rounded-full bg-[#a855f7] text-sm font-semibold text-white"
            >
              Join the list
            </Link>
          </motion.div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top,rgba(88,28,135,0.4),rgba(5,1,7,0.95))] px-6 py-12">
        <Image
          src="/img/codeless%20logo.svg"
          alt="Codeless"
          width={520}
          height={130}
          className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-auto -translate-x-1/2 -translate-y-1/2 opacity-10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 text-sm text-muted sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-white">Work</p>
            <ul className="space-y-2">
              <li>Dream AI</li>
              <li>Dryrunz</li>
              <li>SongPact</li>
              <li>Teambooster</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-white">Services</p>
            <ul className="space-y-2">
              <li>Web & Mobile Design</li>
              <li>Web & No-Code Development</li>
              <li>Brand Identity & Collaterals</li>
              <li>Product Strategy</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-white">Resources</p>
            <ul className="space-y-2">
              <li>Newsletter</li>
              <li>Insights</li>
              <li>Case Studies</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-white">Company</p>
            <ul className="space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

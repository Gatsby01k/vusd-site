"use client";

import { useEffect } from "react";
import Hero from "./components/Hero";
import MetricsStrip from "./components/MetricsStrip"; // <-- ВАЖНО
import WhyNow from "./components/WhyNow";
import Pillars from "./components/Pillars";
import Architecture from "./components/Architecture";
import Stability from "./components/Stability";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Investors from "./components/Investors";

export default function Page() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <MetricsStrip /> {/* <-- ВОТ СЮДА! */}
      <WhyNow />
      <Pillars />
      <Architecture />
      <Stability />
      <Roadmap />
      <Team />
      <Investors />
    </>
  );
}

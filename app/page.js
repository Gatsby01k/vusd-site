import Hero from "./components/Hero";
import MetricsStrip from "./components/MetricsStrip";
import WhyNow from "./components/WhyNow";
import Pillars from "./components/Pillars";
import Architecture from "./components/Architecture";
import Stability from "./components/Stability";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Investors from "./components/Investors";
import RevealClient from "./components/RevealClient";

export default function Page() {
  return (
    <RevealClient>
      <>
        <Hero />
        <MetricsStrip />
        <WhyNow />
        <Pillars />
        <Architecture />
        <Stability />
        <Roadmap />
        <Team />
        <Investors />
      </>
    </RevealClient>
  );
}

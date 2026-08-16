import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { VibeCodingSection } from "@/components/VibeCodingSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PapersSection } from "@/components/PapersSection";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <VibeCodingSection />
        <ProjectsSection />
        <PapersSection />
        <OpenSourceSection />
      </main>
      <Footer />
    </>
  );
}

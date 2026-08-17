import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { VibeCodingSection } from "@/components/VibeCodingSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PapersSection } from "@/components/PapersSection";
import { CommunityContributionsSection } from "@/components/CommunityContributionsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <VibeCodingSection />
        <CommunityContributionsSection />
        <ProjectsSection />
        <PapersSection />
      </main>
      <Footer />
    </>
  );
}

import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import PortFolioLayout from "./layouts/PortfolioLayout";
import AboutMeSection from "./components/AboutMeSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";

export default function App() {
  return (
    <PortFolioLayout>
      <NavBar />
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
      <ExperienceSection />
    </PortFolioLayout>
  );
}

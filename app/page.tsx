import ContactLinks from "./Components/ContactLinks";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ContactLinks/>
      <Projects/>
    </div>
  );
}

import Image from "next/image";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ContactLinks from "./Components/ContactLinks";
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

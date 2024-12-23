import "../styles/Hero-Section.css";
function HeroSection() {
  return (
    <section className="hero">
      <div className="left">
        <div>
          <h1>
            Hi, Im <span>Mahad Ahmed</span>
          </h1>
          <h3>a FrontEnd Developer</h3>
          <p>
            Im a passionate Frontend Developer specializing in creating
            beautiful and responsive websites. I enjoy working with technologies
            like HTML, CSS, JavaScript, TypeScript and Next.js to bring ideas to life. Lets
            create something amazing together!
          </p>
        </div>
      </div>
      <div className="right"></div>
    </section>
  );
}

export default HeroSection;

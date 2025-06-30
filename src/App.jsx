import Header from "./components/Header";
import BackgroundBlobs from "./components/BackgroundBlobs";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Particles from "./Backgrounds/Particles/Particles";
import SplashCursor from "./components/SplashCursor";
import Services from "./sections/Services";

function App() {
  return (
    <>
      {/* Fundo animado - Particles */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <Particles
          particleColors={["#facc15", "#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

      </div>
      <SplashCursor />
      <ScrollProgress />
      <Header />
      <BackgroundBlobs />

      <main className="min-h-screen text-white bg-transparent">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

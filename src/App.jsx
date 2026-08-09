import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import CertificateSlider from './components/CertificateSlider';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <CertificateSlider />
      </main>
      <Footer />
      <ThemeToggle />
    </>
  );
}

import { RoleProvider } from './context/RoleContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import CertificateSlider from './components/CertificateSlider';
import Footer from './components/Footer';

export default function App() {
  return (
    <RoleProvider>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <CertificateSlider />
      </main>
      <Footer />
    </RoleProvider>
  );
}

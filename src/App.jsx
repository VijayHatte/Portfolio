import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

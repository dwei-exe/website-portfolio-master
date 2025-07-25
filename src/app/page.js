import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="mt-24 px-5 xl:px-0 md:px-0">
        <Hero />
      </div>
      <div className='mt-24'>
        <About />
        <Projects />
        <Skills />
      </div>
      <div className="px-5 xl:px-0 md:px-0">
        <Footer />
      </div>
    </main>
  );
}

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DesktopShowcase } from './components/DesktopShowcase';
import { Benchmarks } from './components/Benchmarks';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-[#995bfb] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <DesktopShowcase />
        <Benchmarks />
        <InteractiveTerminal />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

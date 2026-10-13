import { useState } from 'react';
import { Download, Terminal, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#07090e]/80 backdrop-blur-xl border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2198ff] to-[#d748fb] rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
            <img 
              src="/logo.png" 
              alt="CyberCat Linux Logo" 
              className="relative w-11 h-11 object-contain drop-shadow-md rounded-full bg-slate-900/60 p-0.5 border border-cyan-500/30"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                CyberCat
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold">
                Linux OS
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono -mt-0.5">
              Kernel 6.12 • Neon Edition
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-cyan-400 transition-colors">
            Features
          </a>
          <a href="#desktop" className="hover:text-purple-400 transition-colors">
            Experience
          </a>
          <a href="#benchmarks" className="hover:text-pink-400 transition-colors">
            Benchmarks
          </a>
          <a href="#terminal" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Tour
          </a>
          <a href="#download" className="hover:text-purple-400 transition-colors">
            Releases
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-700/40 transition-colors"
            title="GitHub Repository"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="#download"
            className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-lg shadow-cyan-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2198ff] via-[#995bfb] to-[#d748fb] transition-all duration-300 group-hover:scale-105"></div>
            <div className="absolute inset-[1px] bg-[#0b0f19] rounded-[11px] group-hover:bg-transparent transition-all duration-300"></div>
            <span className="relative flex items-center gap-2">
              <Download className="w-4 h-4 text-cyan-300 group-hover:text-white transition-colors" />
              Download ISO
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17] border-b border-cyan-500/10 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg"
          >
            Features
          </a>
          <a
            href="#desktop"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-purple-400 hover:bg-slate-800/40 rounded-lg"
          >
            Experience
          </a>
          <a
            href="#benchmarks"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-pink-400 hover:bg-slate-800/40 rounded-lg"
          >
            Benchmarks
          </a>
          <a
            href="#terminal"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg"
          >
            Interactive Tour
          </a>
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-purple-400 hover:bg-slate-800/40 rounded-lg"
          >
            Download ISO
          </a>
        </div>
      )}
    </nav>
  );
};

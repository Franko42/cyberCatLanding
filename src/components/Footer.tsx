import { Heart, MessageSquare, BookOpen } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#05070a] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="CyberCat Logo" className="w-8 h-8 rounded-full bg-slate-900 p-0.5 border border-cyan-500/30" />
              <span className="text-lg font-bold text-white tracking-tight">CyberCat Linux</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              An unapologetically fast, minimalist Linux distribution engineered for developers, power users, and creators who value aesthetic perfection.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:text-cyan-400 hover:bg-slate-800 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:text-purple-400 hover:bg-slate-800 transition-colors">
                <BookOpen className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Documentation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">Documentation</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Installation Guide</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Plymouth Theme Customization</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Wayland & Hyprland Configs</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Hardware & Dual-GPU Setup</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Package Management (Pacman/AUR)</a></li>
            </ul>
          </div>

          {/* Col 3: Ecosystem */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">Ecosystem</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-purple-400 transition-colors">cybercat-plymouth Engine</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Dotfiles Repository</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Neovim CyberCat Theme</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">ISO Build Scripts</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Changelog & Releases</a></li>
            </ul>
          </div>

          {/* Col 4: Community */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">Community</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Matrix Space (#cybercat:matrix.org)</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Discord Community</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Reddit /r/cybercatlinux</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contribute & Sponsor</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Bug Bounty & Security Reports</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} CyberCat Linux Project. Released under GPL-3.0 License.</p>
          <div className="flex items-center gap-1">
            <span>Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" />
            <span>for lightning-fast laptop performance.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { useState } from 'react';
import { Download, HardDrive, Check, Copy, Usb, ShieldCheck } from 'lucide-react';

export const DownloadSection = () => {
  const [copiedSha, setCopiedSha] = useState(false);
  const sha256 = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  const handleCopySha = () => {
    navigator.clipboard.writeText(sha256);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  return (
    <section id="download" className="py-24 bg-[#07090e] relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Download className="w-3.5 h-3.5" />
            Official ISO Releases
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Download CyberCat Linux
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Free and open-source forever. Flash to any USB drive and test in live mode without touching your hard drive.
          </p>
        </div>

        {/* Editions Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Flagship Edition */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#131d33] to-[#0c1220] border-2 border-cyan-500/40 p-8 shadow-2xl shadow-cyan-500/10 flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#2198ff] to-[#995bfb] text-white text-xs font-bold font-mono tracking-wider shadow-md">
              RECOMMENDED
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="CyberCat Logo" className="w-12 h-12 rounded-xl bg-slate-900 p-0.5 border border-cyan-500/30" />
                <div>
                  <h3 className="text-2xl font-bold text-white">CyberCat Flagship</h3>
                  <p className="text-xs font-mono text-cyan-400">v2026.1 (Neon Edition) • x86_64</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                The complete out-of-the-box experience. Ships with the signature Plymouth boot screen, GPU-accelerated Wayland tiling manager, pre-installed developer toolchains, and bespoke wallpapers.
              </p>

              {/* Specs chips */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs text-slate-300">
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">ISO SIZE</span>
                  <span className="font-semibold text-white">2.4 GB</span>
                </div>
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">KERNEL</span>
                  <span className="font-semibold text-white">6.12 Zen-RT</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              <a
                href="#download-flagship"
                onClick={(e) => { e.preventDefault(); alert("Mock download started: cybercat-2026.1-x86_64.iso (2.4 GB)"); }}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#2198ff] via-[#995bfb] to-[#d748fb] hover:opacity-95 transition-all shadow-lg shadow-purple-600/30"
              >
                <Download className="w-5 h-5" />
                Download ISO Direct (Mirror 1)
              </a>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                <button 
                  onClick={() => alert("Torrent magnet link copied!")}
                  className="hover:text-cyan-400 underline transition-colors"
                >
                  Download via Torrent
                </button>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> GPG Signed
                </span>
              </div>
            </div>
          </div>

          {/* Minimal / Core Edition */}
          <div className="rounded-3xl bg-[#0c1220] border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-purple-400">
                  <HardDrive className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">CyberCat Core</h3>
                  <p className="text-xs font-mono text-purple-400">v2026.1 Minimal • x86_64</p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                A barebones base system for system administrators, custom window manager builders, or lightweight home servers. Includes base pacman repositories, Plymouth CLI, and Wi-Fi drivers.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs text-slate-300">
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">ISO SIZE</span>
                  <span className="font-semibold text-white">840 MB</span>
                </div>
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">BASE PACKAGES</span>
                  <span className="font-semibold text-white">142 Essential</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              <a
                href="#download-core"
                onClick={(e) => { e.preventDefault(); alert("Mock download started: cybercat-core-2026.1-x86_64.iso (840 MB)"); }}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/50 transition-all"
              >
                <Download className="w-5 h-5 text-purple-400" />
                Download Core ISO (840 MB)
              </a>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                <span>Minimal Netinstall</span>
                <span className="text-slate-500">Live CLI mode</span>
              </div>
            </div>
          </div>

        </div>

        {/* Checksum & Flashing Guide */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950/80 border border-slate-800 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-auto">
            <span className="text-xs font-mono text-slate-400 block mb-1">SHA-256 Checksum Verification:</span>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800 max-w-full overflow-hidden">
              <span className="truncate">{sha256}</span>
              <button
                onClick={handleCopySha}
                className="text-slate-400 hover:text-white shrink-0 ml-2"
                title="Copy SHA-256"
              >
                {copiedSha ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 shrink-0">
            <div className="flex items-center gap-1.5">
              <Usb className="w-4 h-4 text-cyan-400" />
              <span>Ventoy / Rufus / dd Compatible</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

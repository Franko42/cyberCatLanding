import { useState } from 'react';
import { Download, Terminal, Copy, Check, Sparkles, Cpu, HardDrive, Zap, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'splash' | 'desktop' | 'shutdown'>('splash');
  const installCmd = "curl -fsSL https://get.cybercat.os | bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#2198ff]/15 via-[#995bfb]/20 to-[#d748fb]/15 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#2198ff]/10 blur-[90px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d748fb]/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      {/* Subtle cyber grid backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{
          backgroundImage: `linear-gradient(#2198ff 1px, transparent 1px), linear-gradient(90deg, #2198ff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-6 shadow-sm shadow-cyan-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>CyberCat v2026.1 Release Candidate is Live</span>
            <span className="text-slate-500">•</span>
            <span className="text-purple-400 font-semibold">Minimalist Plymouth Boot Included</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Cyberpunk Aesthetics. <br />
            <span className="bg-gradient-to-r from-[#2198ff] via-[#995bfb] to-[#d748fb] bg-clip-text text-transparent drop-shadow-sm">
              Uncompromising Speed.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-9 font-normal leading-relaxed">
            A developer-focused Linux distribution built for modern laptops and power users.
            Ultra-fast boot sequence, custom Wayland workflow, and zero telemetry bloat.
          </p>

          {/* CTA Buttons & Quick Install */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-[#2198ff] via-[#995bfb] to-[#d748fb] hover:opacity-95 transition-all shadow-xl shadow-purple-600/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5 text-white" />
              Download ISO (x86_64)
            </a>

            <a
              href="#terminal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/60 hover:border-cyan-500/50 transition-all backdrop-blur-md hover:-translate-y-0.5"
            >
              <Terminal className="w-5 h-5 text-cyan-400" />
              Test Live Tour
            </a>
          </div>

          {/* Quick command curl box */}
          <div className="inline-flex items-center gap-3 bg-slate-950/70 border border-slate-800/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-mono text-slate-300 backdrop-blur-sm max-w-full overflow-hidden">
            <span className="text-pink-400 select-none">$</span>
            <span className="text-slate-200 truncate">{installCmd}</span>
            <button
              onClick={handleCopy}
              className="ml-2 p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800/80 transition-colors"
              title="Copy install command"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Hero Showcase Window */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/60 via-slate-900/80 to-[#07090e] p-[1px] shadow-2xl shadow-cyan-500/10">
            {/* Top window bar */}
            <div className="bg-[#0c101c]/90 rounded-t-2xl px-5 py-3.5 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-600"></div>
                <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span className="text-cyan-400 font-semibold">cybercat-display</span>
                  <span>— 1920x1080@144Hz</span>
                </span>
              </div>

              {/* View switcher tabs */}
              <div className="flex items-center bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('splash')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === 'splash'
                      ? 'bg-gradient-to-r from-[#2198ff] to-[#995bfb] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Boot Splash
                </button>
                <button
                  onClick={() => setActiveTab('desktop')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === 'desktop'
                      ? 'bg-gradient-to-r from-[#995bfb] to-[#d748fb] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Desktop Wallpaper
                </button>
                <button
                  onClick={() => setActiveTab('shutdown')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === 'shutdown'
                      ? 'bg-gradient-to-r from-[#2198ff] to-[#d748fb] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Shutdown Spinner
                </button>
              </div>
            </div>

            {/* Display screen viewport */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-b-2xl bg-black">
              {activeTab === 'splash' && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="/preview.png"
                    alt="CyberCat Plymouth Boot Splash Preview"
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  {/* Floating badge info */}
                  <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>Plymouth 24-bit Smooth Splash • 1.4s Boot</span>
                  </div>
                </div>
              )}

              {activeTab === 'desktop' && (
                <div className="relative w-full h-full">
                  <img
                    src="/wallpaper.png"
                    alt="CyberCat Desktop Wallpaper"
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute top-5 right-5 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-purple-500/30 text-xs font-mono text-purple-300 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    <span>Wayland compositor: 280MB Idle RAM</span>
                  </div>
                </div>
              )}

              {activeTab === 'shutdown' && (
                <div className="relative w-full h-full">
                  <img
                    src="/preview_shutdown.png"
                    alt="CyberCat Shutdown Screen with Animated Spinner"
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute bottom-5 right-5 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-pink-500/30 text-xs font-mono text-pink-300 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                    <span>Instant poweroff & ring state</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar underneath hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-[#0b0f19]/80 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white font-mono">1.4s</p>
                <p className="text-xs text-slate-400 font-medium">Boot to Desktop</p>
              </div>
            </div>

            <div className="bg-[#0b0f19]/80 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white font-mono">&lt; 350 MB</p>
                <p className="text-xs text-slate-400 font-medium">Idle Memory Footprint</p>
              </div>
            </div>

            <div className="bg-[#0b0f19]/80 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm">
              <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white font-mono">0.0%</p>
                <p className="text-xs text-slate-400 font-medium">Telemetry & Bloat</p>
              </div>
            </div>

            <div className="bg-[#0b0f19]/80 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white font-mono">Rolling</p>
                <p className="text-xs text-slate-400 font-medium">Arch-Based Updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

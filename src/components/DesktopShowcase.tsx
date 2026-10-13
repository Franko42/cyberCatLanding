import { useState } from 'react';
import { Eye, Zap, CheckCircle2, Command } from 'lucide-react';

export const DesktopShowcase = () => {
  const [activeTab, setActiveTab] = useState<'plymouth' | 'workflow' | 'palette'>('plymouth');

  const shortcuts = [
    { key: "Super + Return", desc: "Spawn CyberCat Alacritty / Foot Terminal" },
    { key: "Super + Space", desc: "Fuzzy Application Launcher (Rofi-Wayland)" },
    { key: "Super + 1..9", desc: "Instant Workspace Switching" },
    { key: "Super + Shift + C", desc: "Reload Compositor Config on the Fly" },
    { key: "Super + E", desc: "Open Midnight Commander / File Explorer" },
  ];

  const paletteColors = [
    { name: "Neon Cyan", hex: "#2198FF", rgb: "rgb(33, 152, 255)", role: "Accents, Active Borders & Prompts" },
    { name: "Electric Purple", hex: "#995BFB", rgb: "rgb(153, 91, 251)", role: "Selection, Secondary Highlights & Menus" },
    { name: "Vivid Magenta", hex: "#D748FB", rgb: "rgb(215, 72, 251)", role: "Alerts, Badges & Spinner Tail" },
    { name: "Deep Void Dark", hex: "#07090E", rgb: "rgb(7, 9, 14)", role: "Base Canvas & Low-Eye-Strain Background" },
    { name: "Cyber Surface", hex: "#0E131F", rgb: "rgb(14, 19, 31)", role: "Glassmorphic Cards & Elevated Panels" },
  ];

  return (
    <section id="desktop" className="py-24 bg-[#0a0e18] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
              <Eye className="w-3.5 h-3.5" />
              Signature Aesthetics & Experience
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Crafted with intention. <br />
              <span className="text-gradient">From power-on to power-off.</span>
            </h2>
          </div>

          {/* Tab selector */}
          <div className="flex bg-slate-900/90 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('plymouth')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'plymouth'
                  ? 'bg-gradient-to-r from-[#2198ff] to-[#995bfb] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Plymouth Boot Engine
            </button>
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'workflow'
                  ? 'bg-gradient-to-r from-[#995bfb] to-[#d748fb] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tiling Workflow
            </button>
            <button
              onClick={() => setActiveTab('palette')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'palette'
                  ? 'bg-gradient-to-r from-[#2198ff] to-[#d748fb] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Color Identity
            </button>
          </div>
        </div>

        {/* Tab 1: Plymouth Boot Splash */}
        {activeTab === 'plymouth' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group bg-black">
              <img
                src="/preview.png"
                alt="CyberCat Plymouth Boot Engine"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-cyan-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  KMS Direct Framebuffer Rendering
                </span>
                <span className="text-slate-400">Resolution Auto-Detect (Window.GetWidth)</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0e1422] border border-cyan-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl pointer-events-none rounded-full" />
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  Zero-Flicker Boot Splash
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  CyberCat comes equipped with a custom Plymouth theme that transitions seamlessly from the UEFI motherboard splash straight into your graphical login or Wayland desktop without a single blink.
                </p>

                <div className="space-y-3 text-xs font-medium text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>3x3 Subsampled Arc Ring Spinner with mathematical glow trail</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Dynamic mode detection: progress track on boot, smooth ring on shutdown</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>Optimized 24-bit PNG assets with sub-5ms draw cycles</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400">
                  <span>cybercat.script (Plymouth Engine)</span>
                  <span className="text-[10px] text-cyan-400">Native C / Script</span>
                </div>
                <pre className="text-slate-400 overflow-x-auto text-[11px] leading-relaxed">
                  <code>{`# Detect Mode: boot vs shutdown / reboot
mode = Plymouth.GetMode();
if (mode == "shutdown" || mode == "reboot") {
  spinner_frame_count = 30;
  // Subsampled Neon Arc (Cyan -> Purple -> Magenta)
  Plymouth.SetRefreshFunction(refresh_callback);
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Keyboard Workflow */}
        {activeTab === 'workflow' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative bg-black">
              <img
                src="/wallpaper.png"
                alt="CyberCat Tiling Workspace"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-purple-500/30 text-xs font-mono text-purple-300 flex items-center gap-2">
                <Command className="w-3.5 h-3.5 text-purple-400" />
                <span>Wayland 144Hz Active Tiling</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Keyboard-First Ergonomics
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Keep your hands on the home row. CyberCat comes tuned with modern keybindings designed for coding velocity:
              </p>

              <div className="space-y-2.5">
                {shortcuts.map((sc, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-colors"
                  >
                    <span className="text-xs text-slate-300">{sc.desc}</span>
                    <kbd className="px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-xs font-mono text-cyan-300 font-semibold shadow-inner">
                      {sc.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Color Identity */}
        {activeTab === 'palette' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {paletteColors.map((color, i) => (
                <div 
                  key={i}
                  className="bg-[#0e1422] border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors"
                >
                  <div 
                    className="w-full h-20 rounded-xl mb-4 shadow-lg border border-white/10" 
                    style={{ backgroundColor: color.hex }}
                  />
                  <h4 className="text-base font-bold text-white mb-1">{color.name}</h4>
                  <p className="text-xs font-mono text-cyan-300 mb-1">{color.hex}</p>
                  <p className="text-[11px] font-mono text-slate-400 mb-2">{color.rgb}</p>
                  <p className="text-xs text-slate-400 leading-snug">{color.role}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-purple-950/20 to-pink-950/20 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img src="/logo.png" alt="CyberCat Logo" className="w-16 h-16 rounded-xl bg-slate-900/80 p-1 border border-cyan-500/30 shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white">Consistent Theming Across All Dev Tools</h4>
                  <p className="text-sm text-slate-400">Pre-configured color schemes for Neovim, VSCode, Alacritty, Kitty, GTK4, and Waybar.</p>
                </div>
              </div>
              <a
                href="#download"
                className="px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold transition-colors shrink-0"
              >
                Inspect Dotfiles (.config)
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

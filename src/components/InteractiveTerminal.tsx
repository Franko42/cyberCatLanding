import { useState } from 'react';
import { Terminal as TerminalIcon, Play, Copy, Check } from 'lucide-react';

export const InteractiveTerminal = () => {
  const [activeCmd, setActiveCmd] = useState<string>('fastfetch');
  const [copied, setCopied] = useState(false);

  const commandPresets = [
    { label: "fastfetch", cmd: "fastfetch" },
    { label: "free -h", cmd: "free -h" },
    { label: "cybercat-plymouth test", cmd: "cybercat-plymouth test" },
    { label: "uname -a", cmd: "uname -a" },
    { label: "cat /etc/os-release", cmd: "cat /etc/os-release" }
  ];

  const renderOutput = (cmd: string) => {
    switch (cmd) {
      case 'fastfetch':
        return (
          <div className="space-y-1 font-mono text-xs sm:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 text-cyan-400 font-bold select-none whitespace-pre">
{`   /\\_____/\\
  /  o   o  \\
 ( ==  ^  == )
  )         (
 (           )
( (  )   (  ) )
(__(_____)___)`}
                <div className="mt-2 text-purple-400 text-xs">
                  CyberCat Linux 2026.1 (Neon)
                </div>
              </div>
              <div className="md:col-span-8 space-y-1 text-slate-300">
                <p><span className="text-cyan-400 font-semibold">OS:</span> CyberCat Linux x86_64 [Rolling]</p>
                <p><span className="text-cyan-400 font-semibold">Host:</span> Modern Laptop Architecture</p>
                <p><span className="text-cyan-400 font-semibold">Kernel:</span> 6.12.8-cybercat1-zen (PREEMPT_RT)</p>
                <p><span className="text-cyan-400 font-semibold">Uptime:</span> 12 mins (Instant Sleep & Wake)</p>
                <p><span className="text-cyan-400 font-semibold">Packages:</span> 612 (pacman), 0 (snap bloat)</p>
                <p><span className="text-cyan-400 font-semibold">Shell:</span> zsh 5.9 with starship-cybercat</p>
                <p><span className="text-cyan-400 font-semibold">Display:</span> Wayland (1920x1080 @ 144Hz)</p>
                <p><span className="text-cyan-400 font-semibold">WM:</span> Hyprland-CyberCat (GPU-accelerated)</p>
                <p><span className="text-cyan-400 font-semibold">Terminal:</span> alacritty</p>
                <p><span className="text-cyan-400 font-semibold">CPU:</span> Multi-core Ultra-low Latency</p>
                <p><span className="text-cyan-400 font-semibold">Memory:</span> <span className="text-emerald-400 font-semibold">324MiB</span> / 3840MiB (8.4%)</p>
                <div className="flex gap-2 pt-2">
                  <span className="w-5 h-3 bg-[#2198ff] rounded-xs inline-block" />
                  <span className="w-5 h-3 bg-[#995bfb] rounded-xs inline-block" />
                  <span className="w-5 h-3 bg-[#d748fb] rounded-xs inline-block" />
                  <span className="w-5 h-3 bg-emerald-400 rounded-xs inline-block" />
                  <span className="w-5 h-3 bg-slate-300 rounded-xs inline-block" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'free -h':
        return (
          <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-1">
            <p className="text-slate-500">               total        used        free      shared  buff/cache   available</p>
            <p><span className="text-cyan-400">Mem:</span>          3.7Gi       <span className="text-emerald-400 font-semibold">324Mi</span>       2.9Gi       8.0Mi       480Mi       3.2Gi</p>
            <p><span className="text-purple-400">Swap:</span>         8.0Gi          0B       8.0Gi (zram-enabled, zstd compressed)</p>
            <p className="text-xs text-slate-400 mt-2">✓ Less than 10% memory consumption on base desktop.</p>
          </div>
        );

      case 'cybercat-plymouth test':
        return (
          <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-1">
            <p className="text-purple-400">[INFO] Initializing Plymouth Test Canvas in DRM mode...</p>
            <p className="text-cyan-400">[OK] Loaded theme: /usr/share/plymouth/themes/cybercat</p>
            <p className="text-slate-300">[OK] Logo: logo.png (260x260 RGBA) centered at (X: 960, Y: 510)</p>
            <p className="text-slate-300">[OK] 30-frame Arc Spinner active (Neon Cyan -&gt; Purple -&gt; Magenta)</p>
            <p className="text-slate-300">[OK] Subsampling: 3x3 (9 samples/px anti-aliased edge smoothing)</p>
            <p className="text-emerald-400">[SUCCESS] Render loop stable at 60.0 FPS, 0 dropped frames.</p>
          </div>
        );

      case 'uname -a':
        return (
          <div className="font-mono text-xs sm:text-sm text-slate-300">
            <p>Linux cybercat-station 6.12.8-cybercat1-zen #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux</p>
          </div>
        );

      case 'cat /etc/os-release':
        return (
          <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-1">
            <p><span className="text-cyan-400">NAME</span>="CyberCat Linux"</p>
            <p><span className="text-cyan-400">PRETTY_NAME</span>="CyberCat Linux 2026.1 (Neon Prowl)"</p>
            <p><span className="text-cyan-400">ID</span>=cybercat</p>
            <p><span className="text-cyan-400">ID_LIKE</span>=arch</p>
            <p><span className="text-cyan-400">HOME_URL</span>="https://cybercat.os"</p>
            <p><span className="text-cyan-400">BUILD_ID</span>=rolling</p>
          </div>
        );

      default:
        return <p className="font-mono text-xs text-red-400">Command not recognized</p>;
    }
  };

  const copyCurrentCommand = () => {
    navigator.clipboard.writeText(activeCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-24 bg-[#07090e] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            Live Web Sandbox
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Inspect CyberCat System Internals
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Click any command below to simulate how the CyberCat environment operates on real metal.
          </p>
        </div>

        {/* Command quick-click buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {commandPresets.map((preset) => (
            <button
              key={preset.cmd}
              onClick={() => setActiveCmd(preset.cmd)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeCmd === preset.cmd
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              <Play className="w-3 h-3 text-cyan-400" />
              <span>{preset.label}</span>
            </button>
          ))}
        </div>

        {/* Terminal Box */}
        <div className="rounded-2xl bg-[#0a0e17] border border-cyan-500/30 shadow-2xl overflow-hidden shadow-cyan-950/40">
          {/* Header */}
          <div className="bg-[#0f1524] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 font-mono text-xs text-slate-400">franko@cybercat-station:~</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyCurrentCommand}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                title="Copy Command"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm min-h-[300px] bg-[#070a12]/95 overflow-x-auto">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-4">
              <span className="text-purple-400">cybercat@box</span>
              <span className="text-slate-500">:</span>
              <span className="text-[#2198ff]">~</span>
              <span className="text-pink-400">$</span>
              <span className="text-white">{activeCmd}</span>
              <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
            </div>

            <div className="pt-2 animate-fadeIn">
              {renderOutput(activeCmd)}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

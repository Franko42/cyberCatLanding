import type { ReactNode } from 'react';
import { 
  Palette, 
  Terminal, 
  BatteryCharging, 
  ShieldCheck, 
  Package, 
  Cpu, 
  Layers
} from 'lucide-react';

interface FeatureItem {
  icon: ReactNode;
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  codeSnippet?: string;
}

export const Features = () => {
  const features: FeatureItem[] = [
    {
      icon: <Palette className="w-6 h-6 text-[#2198ff]" />,
      tag: "Signature UI",
      tagColor: "border-[#2198ff]/30 text-[#2198ff] bg-[#2198ff]/10",
      title: "Cyberpunk Minimalist Aesthetics",
      description: "Cohesive dark theme powered by Neon Cyan (#2198FF), Electric Purple (#995BFB), and Vivid Magenta (#D748FB). Features custom 24-bit Plymouth bootloader themes and bespoke wallpapers out-of-the-box."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#995bfb]" />,
      tag: "Ultra-Lightweight",
      tagColor: "border-[#995bfb]/30 text-[#995bfb] bg-[#995bfb]/10",
      title: "Sub-350MB RAM Footprint",
      description: "Stripped of systemd bloat and heavyweight background daemons. Boots into an ultra-lean Wayland environment that flies even on 4GB RAM laptops.",
      codeSnippet: "free -m  # Mem Used: ~320MB at cold boot"
    },
    {
      icon: <Terminal className="w-6 h-6 text-[#d748fb]" />,
      tag: "Ready to Code",
      tagColor: "border-[#d748fb]/30 text-[#d748fb] bg-[#d748fb]/10",
      title: "Pre-Configured Dev Toolchains",
      description: "Zero tedious setup. Python 3.13+, Node.js v22+, GCC/Clang, Rustup, Git, Neovim, and Starship shell prompt come tuned and pre-linked from day one.",
      codeSnippet: "node -v && python3 --version && gcc --version"
    },
    {
      icon: <BatteryCharging className="w-6 h-6 text-emerald-400" />,
      tag: "Laptop First",
      tagColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      title: "Intelligent Power Management",
      description: "Automated CPU governor scaling (auto-cpufreq + TLP) that stretches battery life by up to 40% when unplugged and unlocks maximum thermal performance on AC."
    },
    {
      icon: <Package className="w-6 h-6 text-cyan-400" />,
      tag: "Ecosystem",
      tagColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
      title: "Pacman, AUR & Flatpak Sandboxing",
      description: "Gain access to over 90,000+ packages in the Arch ecosystem. Includes automatic Btrfs snapshot backups before every system update so you can never break your OS."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-pink-400" />,
      tag: "Privacy & Sec",
      tagColor: "border-pink-500/30 text-pink-400 bg-pink-500/10",
      title: "Zero Telemetry & LUKS Encrypted",
      description: "No tracking, no telemetry pings, no hidden accounts. Full-disk encryption with optional TPM2 automatic key unwrapping for instant biometric or passphrase login."
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-[#07090e]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#995bfb]/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#2198ff]/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium mb-4">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            Core Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built from scratch for developers who despise sluggish software.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Every layer of CyberCat Linux—from kernel parameters to the Plymouth bootloader—is crafted for zero friction and unmatched responsiveness.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0c101a]/80 hover:bg-[#0f1524]/90 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {feature.icon}
                  </div>
                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${feature.tagColor}`}>
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              {feature.codeSnippet && (
                <div className="mt-2 bg-slate-950/80 rounded-lg p-2.5 border border-slate-800/80 font-mono text-xs text-slate-300 flex items-center justify-between">
                  <span className="truncate text-cyan-300">{feature.codeSnippet}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

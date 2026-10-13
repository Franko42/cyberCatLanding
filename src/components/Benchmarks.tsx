import { Gauge, CheckCircle2, Zap, Cpu } from 'lucide-react';

export const Benchmarks = () => {
  const benchmarks = [
    {
      metric: "Idle Memory Usage",
      unit: "MB",
      cybercat: 324,
      fedora: 1180,
      ubuntu: 1420,
      desc: "Leaves over 90% of your RAM available for heavy compilers and Docker containers."
    },
    {
      metric: "Cold Boot Duration",
      unit: "seconds",
      cybercat: 1.4,
      fedora: 6.8,
      ubuntu: 8.5,
      desc: "Kernel module stripping and direct Plymouth KMS handshake skips systemd delays."
    },
    {
      metric: "Active Background Tasks",
      unit: "tasks",
      cybercat: 58,
      fedora: 165,
      ubuntu: 198,
      desc: "Zero analytics daemons, crash uploaders, or telemetry polling loops."
    }
  ];

  return (
    <section id="benchmarks" className="py-24 bg-[#0a0e17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono font-medium mb-3">
            <Gauge className="w-3.5 h-3.5" />
            Hardware Performance
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered to unleash older and modern laptops alike.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tested on low-spec dual-core laptops up to 64-core developer rigs.
            Every cycle is reclaimed for your code.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benchmarks.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0e1422] border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-slate-300 mb-1">{item.metric}</h3>
                <p className="text-xs text-slate-400 mb-6">{item.desc}</p>

                {/* Progress Visual bars */}
                <div className="space-y-4">
                  {/* CyberCat */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        CyberCat
                      </span>
                      <span className="text-cyan-300 font-bold">{item.cybercat} {item.unit}</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-cyan-500/30">
                      <div 
                        className="h-full bg-gradient-to-r from-[#2198ff] to-[#995bfb] rounded-full shadow-sm"
                        style={{ width: `${Math.min(100, (item.cybercat / item.ubuntu) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Fedora */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                      <span>Fedora 40 (GNOME)</span>
                      <span>{item.fedora} {item.unit}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-slate-700 rounded-full"
                        style={{ width: `${Math.min(100, (item.fedora / item.ubuntu) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Ubuntu */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                      <span>Ubuntu 24.04 LTS</span>
                      <span>{item.ubuntu} {item.unit}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-slate-700 rounded-full"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Up to 75% more efficient</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hardware Compatibility Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0c1322] via-[#101728] to-[#0c1322] border border-cyan-500/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shrink-0">
              <Cpu className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Broad Architecture Compatibility</h4>
              <p className="text-sm text-slate-300">
                Native out-of-the-box support for modern AMD Ryzen, Intel Core Ultra, Apple Silicon (Asahi port in progress), and legacy dual-core netbooks.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              x86_64-v3
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              Wayland
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              PipeWire
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

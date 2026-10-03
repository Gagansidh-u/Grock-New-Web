import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Server, 
  Cpu, 
  Terminal, 
  Globe, 
  Layers, 
  ShieldCheck,
  Zap
} from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const technologies = [
    { name: 'React 19 & Next.js', category: 'Frontend', icon: Globe },
    { name: 'TypeScript & ES2022', category: 'Language', icon: Code2 },
    { name: 'Tailwind CSS v4', category: 'Styling', icon: Layers },
    { name: 'Android Jetpack & Kotlin', category: 'Mobile', icon: Smartphone },
    { name: 'Release AAB & Signed APK', category: 'Packaging', icon: Cpu },
    { name: 'Node.js & Express API', category: 'Backend', icon: Server },
    { name: 'PostgreSQL & MySQL', category: 'Database', icon: Database },
    { name: 'Python & Pandas', category: 'Data Analytics', icon: Terminal },
    { name: 'Google Sheets Automation', category: 'Workflows', icon: Zap },
    { name: 'Cashfree Payment Webhooks', category: 'Integration', icon: ShieldCheck },
  ];

  return (
    <div className="w-full bg-slate-900 text-white py-4 overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-6">
        <div className="shrink-0 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-r border-slate-700 pr-6 hidden sm:flex">
          <Terminal className="w-3.5 h-3.5" />
          <span>Core Tech Stack</span>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap text-xs text-slate-300 py-1">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 shrink-0 hover:border-cyan-500 hover:text-white transition-all cursor-default"
              >
                <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-semibold">{tech.name}</span>
                <span className="text-[10px] text-slate-400 font-mono">({tech.category})</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

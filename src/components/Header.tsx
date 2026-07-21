import React, { useState } from 'react';
import { Search, ChevronDown, Sparkles, ExternalLink } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  totalResults: number;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, totalResults }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo & Main Nav */}
        <div className="flex items-center gap-8">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-slate-900 group"
          >
            <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
              ▲
            </div>
            <span className="font-extrabold text-slate-900">alchemy</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <div className="relative group">
              <button 
                onClick={() => setActiveMenu(activeMenu === 'platform' ? null : 'platform')}
                className="flex items-center gap-1 hover:text-slate-900 py-2 transition-colors cursor-pointer"
              >
                Platform <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-slate-900 py-2 transition-colors cursor-pointer">
                Solutions <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-slate-900 py-2 transition-colors cursor-pointer">
                Developers <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-slate-900 py-2 transition-colors cursor-pointer">
                Resources <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
              </button>
            </div>

            <a href="#pricing" className="hover:text-slate-900 py-2 transition-colors">
              Pricing
            </a>
          </nav>
        </div>

        {/* Middle / Right Action items */}
        <div className="flex items-center gap-3">
          {/* Header Quick Search */}
          <div className="relative hidden sm:block w-48 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search dapps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-100 hover:bg-slate-200/70 focus:bg-white text-xs font-medium rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all text-slate-800 placeholder-slate-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors"
          >
            Contact sales
          </a>

          <button
            onClick={() => alert('Alchemy Login Modal Demo')}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold px-4 py-2 rounded-md shadow-sm transition-all cursor-pointer"
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

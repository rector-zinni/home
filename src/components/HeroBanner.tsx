import React from 'react';
import { ChevronRight, Box } from 'lucide-react';

interface HeroBannerProps {
  totalCount: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ totalCount }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white">
      {/* Background Decorative Geometric Shapes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden md:block">
        <div className="w-48 h-48 rounded-3xl border border-white/40 rotate-12 backdrop-blur-3xl flex items-center justify-center">
          <Box className="w-24 h-24 text-white/80" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        {/* Breadcrumb Nav */}
        <nav className="flex items-center gap-1.5 text-xs text-blue-100/90 font-medium mb-6">
          <a href="#" className="hover:text-white transition-colors">Dapp Store</a>
          <ChevronRight className="w-3.5 h-3.5 text-blue-200/60" />
          <a href="#" className="hover:text-white transition-colors">Trading Tools</a>
          <ChevronRight className="w-3.5 h-3.5 text-blue-200/60" />
          <span className="text-white font-semibold">Crypto Exchanges</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
          Crypto Exchanges
        </h1>
      </div>

      {/* Light Intro Bar immediately under Hero Banner */}
      <div className="bg-slate-50 border-b border-slate-200 text-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            List of Crypto Exchanges
          </h2>
          <p className="text-sm text-slate-600 max-w-4xl leading-relaxed">
            Discover {totalCount} Crypto Exchanges across the most popular web3 ecosystems with Alchemy's Dapp Store. 
            Also explore related collections including <span className="text-blue-600 font-medium">Decentralized Exchanges (DEXs)</span>, <span className="text-blue-600 font-medium">Custody Solutions</span>, and <span className="text-blue-600 font-medium">Hardware Wallets</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

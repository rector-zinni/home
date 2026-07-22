import React from 'react';
import { ArrowRight, Repeat, ShieldCheck, HardDrive } from 'lucide-react';
import { RELATED_COLLECTIONS } from '../data/ex';

interface RelatedCollectionsProps {
  onSelectCategory: (categoryName: string) => void;
}

export const RelatedCollections: React.FC<RelatedCollectionsProps> = ({ onSelectCategory }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'dexs':
        return <Repeat className="w-5 h-5 text-blue-600" />;
      case 'custody':
        return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      case 'hardware-wallets':
        return <HardDrive className="w-5 h-5 text-slate-700" />;
      default:
        return <Repeat className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-16 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Related Collections
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto mb-10">
          Discover web3 applications from categories similar to Crypto Exchanges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RELATED_COLLECTIONS.map((collection) => (
            <div
              key={collection.id}
              onClick={() => onSelectCategory(collection.title)}
              className="group bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-between hover:border-blue-500 hover:shadow-lg transition-all duration-200 cursor-pointer text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                  {getIcon(collection.id)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-blue-600 transition-colors flex items-center gap-1">
                    {collection.title}
                  </h3>
                  <span className="text-xs text-slate-500">
                    {collection.count} Apps
                  </span>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-slate-400 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* API Key CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="text-left max-w-xl">
            <h3 className="text-xl font-bold text-white mb-1">
              Build your next Web3 App with Alchemy
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Access industry-leading node infrastructure, NFT APIs, Account Abstraction SDKs, and real-time WebSockets.
            </p>
          </div>
          <button
            onClick={() => alert('API Key request demo')}
            className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex-shrink-0"
          >
            Get your API key
          </button>
        </div>
      </div>
    </section>
  );
};

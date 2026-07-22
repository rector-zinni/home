import React, { useState } from 'react';
import { X, ShieldCheck, Star, ExternalLink, Globe, Layers, Users, TrendingUp, Copy, Check, Lock } from 'lucide-react';
import { CryptoExchange } from '../types';
import { AssetImage } from './AssetImage';
import { getChainIconUrl, getExchangeLogoUrl } from '../utils/icon';

interface ExchangeDetailModalProps {
  exchange: CryptoExchange | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const ExchangeDetailModal: React.FC<ExchangeDetailModalProps> = ({
  exchange,
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  if (!exchange) return null;
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <AssetImage
              src={getExchangeLogoUrl(exchange)}
              alt={`${exchange.name} logo`}
              fallback={exchange.name.substring(0, 2).toUpperCase()}
              className={`w-14 h-14 rounded-2xl object-cover shadow-md border-2 border-white/20 flex-shrink-0 ${exchange.bgIconColor || 'bg-blue-600'}`}
              fallbackClassName="flex items-center justify-center text-white font-extrabold text-xl"
            />
            <div className="flex-1 pr-8">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black tracking-tight text-white">{exchange.name}</h2>
                {exchange.isVerified && (
                  <span className="flex items-center gap-1 bg-blue-500/30 text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-400/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    Verified
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 mt-1 flex items-center gap-3">
                {exchange.headquarters && <span>HQ: {exchange.headquarters}</span>}
                {exchange.foundedYear && <span>• Established {exchange.foundedYear}</span>}
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Rating
              </div>
              <div className="text-base font-extrabold text-slate-900">{exchange.rating} / 5.0</div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-blue-500" /> Users
              </div>
              <div className="text-base font-extrabold text-slate-900">{exchange.usersCount || '500K+'}</div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500" /> 24h Volume
              </div>
              <div className="text-base font-extrabold text-slate-900">{exchange.volume24h || '$100M+'}</div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-purple-500" /> Security
              </div>
              <div className="text-base font-extrabold text-emerald-600">Audited</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Overview</h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50/60 p-4 rounded-xl border border-slate-200/60">
              {exchange.description}
            </p>
          </div>

          {/* Category Tags */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {exchange.tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200/60 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Supported Chains */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Supported Blockchains</h4>
            <div className="flex flex-wrap gap-2">
              {exchange.chains.map((chain) => (
                <span key={chain} className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md border border-slate-200 flex items-center gap-1.5">
                  <AssetImage
                    src={getChainIconUrl(chain)}
                    alt={`${chain} network logo`}
                    fallback={chain.slice(0, 2).toUpperCase()}
                    className="w-4 h-4 rounded-full object-cover flex-shrink-0"
                    fallbackClassName="w-4 h-4 rounded-full bg-slate-700 text-white flex items-center justify-center text-[9px] font-black"
                  />
                  <span>{chain}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => onToggleBookmark(exchange.id, e)}
              className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                isBookmarked 
                  ? 'bg-amber-50 text-amber-700 border-amber-300' 
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              {isBookmarked ? 'Bookmarked' : 'Bookmark'}
            </button>

            <button
              onClick={handleCopyLink}
              className="px-3 py-2 text-xs font-semibold bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Share'}
            </button>
          </div>

          <button
            onClick={() => {
              alert(`Launching dapp overview for ${exchange.name}`);
            }}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Visit Dapp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

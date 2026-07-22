import React from 'react';
import { Star, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CryptoExchange } from '../types';
import { AssetImage } from './AssetImage';
import { getChainIconUrl, getExchangeLogoUrl } from '../utils/icon';

interface ExchangeCardProps {
  exchange: CryptoExchange;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
  onClick: (exchange: CryptoExchange) => void;
}

export const ExchangeCard: React.FC<ExchangeCardProps> = ({
  exchange,
  isBookmarked,
  onToggleBookmark,
  onClick
}) => {
  return (
    <div
      onClick={() => onClick(exchange)}
      className="group relative bg-white rounded-xl border border-slate-200/90 p-5 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer text-left"
    >
      <div>
        {/* Top Badges / Tags */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          {exchange.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${
                tag.includes('Free')
                  ? 'bg-sky-50 text-sky-700 border border-sky-200/60'
                  : tag.includes('Enterprise')
                  ? 'bg-purple-50 text-purple-700 border border-purple-200/60'
                  : tag.includes('Hardware')
                  ? 'bg-slate-100 text-slate-700 border border-slate-200'
                  : 'bg-indigo-50 text-indigo-700 border border-indigo-200/60'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Brand Icon + Name Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <AssetImage
              src={getExchangeLogoUrl(exchange)}
              alt={`${exchange.name} logo`}
              fallback={exchange.name.substring(0, 2).toUpperCase()}
              className={`w-10 h-10 rounded-xl object-cover shadow-xs group-hover:scale-105 transition-transform ${exchange.bgIconColor || 'bg-blue-600'}`}
              fallbackClassName="flex items-center justify-center text-white font-extrabold text-sm"
            />
            <div>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                {exchange.name}
                {exchange.isVerified && (
                  <ShieldCheck className="w-4 h-4 text-blue-500 fill-blue-50 flex-shrink-0" title="Verified Dapp" />
                )}
              </h3>
              {exchange.foundedYear && (
                <span className="text-[11px] text-slate-400 font-normal">
                  Est. {exchange.foundedYear}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={(e) => onToggleBookmark(exchange.id, e)}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
            title="Bookmark exchange"
          >
            <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
          </button>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {exchange.description}
        </p>
      </div>

      {/* Bottom Footer info: Chains & Stats */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mr-1">Chains:</span>
          {exchange.chains.slice(0, 3).map((chain) => (
            <span
              key={chain}
              className="px-1.5 py-0.5 rounded text-[10px] bg-slate-100 text-slate-700 font-medium flex items-center gap-1"
            >
              <AssetImage
                src={getChainIconUrl(chain)}
                alt={`${chain} network logo`}
                fallback={chain.slice(0, 2).toUpperCase()}
                className="w-3.5 h-3.5 rounded-full object-cover flex-shrink-0"
                fallbackClassName="w-3.5 h-3.5 rounded-full bg-slate-700 text-white flex items-center justify-center text-[8px] font-black"
              />
              <span>{chain}</span>
            </span>
          ))}
          {exchange.chains.length > 3 && (
            <span className="text-[10px] text-slate-400 font-medium">
              +{exchange.chains.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-xs">
          <span>View</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

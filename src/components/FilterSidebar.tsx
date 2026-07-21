import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, FilterX } from 'lucide-react';
import { ALL_CHAINS } from '../data/exchanges';
import { CategoryTag, ChainOption } from '../types';

interface FilterSidebarProps {
  selectedChain: ChainOption | null;
  setSelectedChain: (chain: ChainOption | null) => void;
  selectedTag: CategoryTag | null;
  setSelectedTag: (tag: CategoryTag | null) => void;
  onReset: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedChain,
  setSelectedChain,
  selectedTag,
  setSelectedTag,
  onReset,
}) => {
  const [chainOpen, setChainOpen] = useState(true);

  const CATEGORY_LIST: CategoryTag[] = [
    'Crypto Exchanges',
    'Free Customers',
    'Enterprise Customers',
    'Decentralized Exchanges (DEXs)',
    'Hardware Wallets',
    'Software Wallets',
    'Web3 Bridges',
    'Crypto Trading Tools'
  ];

  return (
    <aside className="w-full lg:w-60 flex-shrink-0 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold tracking-wider text-slate-500 uppercase">
          Filter
        </h3>
        {(selectedChain || selectedTag) && (
          <button
            onClick={onReset}
            className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer transition-colors"
          >
            <FilterX className="w-3.5 h-3.5" />
            Reset
          </button>
        )}
      </div>

      {/* Explore By Chain Section */}
      <div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-xs">
        <button
          onClick={() => setChainOpen(!chainOpen)}
          className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-800 bg-slate-50/70 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <span>Explore By Chain</span>
          {chainOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>

        {chainOpen && (
          <div className="p-2 space-y-0.5 max-h-80 overflow-y-auto divide-y divide-slate-100">
            {ALL_CHAINS.map((c) => {
              const isSelected = selectedChain === c.name;
              return (
                <button
                  key={c.name}
                  onClick={() => setSelectedChain(isSelected ? null : (c.name as ChainOption))}
                  className={`w-full text-left px-3 py-2 text-xs font-medium rounded-lg flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-4 h-4 rounded-full ${c.color} text-white flex items-center justify-center text-[10px] font-black`}>
                      {c.icon.slice(0, 1)}
                    </span>
                    <span>{c.name}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Categories Filter */}
      <div className="border border-slate-200 rounded-xl bg-white p-3 space-y-2 shadow-xs">
        <div className="text-xs font-bold text-slate-700 px-1 py-1">
          Categories
        </div>
        <div className="space-y-1">
          <button
            onClick={() => setSelectedTag(null)}
            className={`w-full text-left px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedTag === null
                ? 'bg-blue-600 text-white font-semibold shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Categories
          </button>
          {CATEGORY_LIST.map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(isSelected ? null : tag)}
                className={`w-full text-left px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className="truncate">{tag}</span>
                {isSelected && <Check className="w-3 h-3 text-blue-600 flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

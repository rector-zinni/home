import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { FilterSidebar } from './components/FilterSidebar';
import { ExchangeCard } from './components/exca';
import { ExchangeDetailModal } from './components/ExchangeDetailModal';
import { RelatedCollections } from './components/RelatedCollections';
import { Footer } from './components/Footer';
import { vardatrS } from './data/ex';
import { CryptoExchange, CategoryTag, ChainOption } from './types';
import { Search, SlidersHorizontal, Star, LayoutGrid, ListFilter } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChain, setSelectedChain] = useState<ChainOption | null>(null);
  const [selectedTag, setSelectedTag] = useState<CategoryTag | null>(null);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['zengo', 'coinbase', 'kraken']);
  const [selectedExchange, setSelectedExchange] = useState<CryptoExchange | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  // Filter Logic
  const filteredExchanges = useMemo(() => {
    return vardatrS.filter((ex) => {
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = ex.name.toLowerCase().includes(q);
        const matchesDesc = ex.description.toLowerCase().includes(q);
        const matchesTag = ex.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesTag) return false;
      }

      // Chain Filter
      if (selectedChain) {
        if (!ex.chains.includes(selectedChain)) return false;
      }

      // Tag Filter
      if (selectedTag) {
        if (!ex.tags.includes(selectedTag)) return false;
      }

      // Bookmarks Filter
      if (showBookmarksOnly) {
        if (!bookmarkedIds.includes(ex.id)) return false;
      }

      return true;
    });
  }, [searchQuery, selectedChain, selectedTag, showBookmarksOnly, bookmarkedIds]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredExchanges.length / itemsPerPage) || 1;
  const paginatedExchanges = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredExchanges.slice(start, start + itemsPerPage);
  }, [filteredExchanges, currentPage]);

  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedChain(null);
    setSelectedTag(null);
    setShowBookmarksOnly(false);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-blue-500 selection:text-white">
      {/* Top Navigation */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalResults={filteredExchanges.length}
      />

      {/* Hero Banner with Title & Intro */}
      <HeroBanner totalCount={vardatrS.length} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        
        {/* Controls / Filter Bar above grid */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
          
          {/* Main Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search for a dapp..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-xs font-medium rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder-slate-400 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Right info & toggles */}
          <div className="flex items-center gap-3 self-end sm:self-auto text-xs text-slate-500">
            <button
              onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                showBookmarksOnly
                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${showBookmarksOnly ? 'fill-amber-500 text-amber-500' : ''}`} />
              Saved ({bookmarkedIds.length})
            </button>

            <span className="text-slate-400 hidden md:inline">|</span>

            <span className="font-medium text-slate-600">
              Showing <span className="font-bold text-slate-900">{filteredExchanges.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredExchanges.length)}</span> of <span className="font-bold text-slate-900">{filteredExchanges.length}</span> results
            </span>
          </div>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sidebar Filter */}
          <FilterSidebar
            selectedChain={selectedChain}
            setSelectedChain={(chain) => {
              setSelectedChain(chain);
              setCurrentPage(1);
            }}
            selectedTag={selectedTag}
            setSelectedTag={(tag) => {
              setSelectedTag(tag);
              setCurrentPage(1);
            }}
            onReset={handleResetFilters}
          />

          {/* Main Cards Area */}
          <div className="flex-1 w-full space-y-8">
            
            {/* Active filter badges bar if any active */}
            {(selectedChain || selectedTag || searchQuery || showBookmarksOnly) && (
              <div className="flex flex-wrap items-center gap-2 p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-xs">
                <span className="font-bold text-blue-900 mr-1 flex items-center gap-1">
                  <SlidersHorizontal className="w-3.5 h-3.5" /> Filtered by:
                </span>

                {selectedChain && (
                  <span className="bg-blue-600 text-white font-medium px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    Chain: {selectedChain}
                    <button onClick={() => setSelectedChain(null)} className="ml-1 text-blue-200 hover:text-white font-bold">✕</button>
                  </span>
                )}

                {selectedTag && (
                  <span className="bg-indigo-600 text-white font-medium px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    Category: {selectedTag}
                    <button onClick={() => setSelectedTag(null)} className="ml-1 text-indigo-200 hover:text-white font-bold">✕</button>
                  </span>
                )}

                {searchQuery && (
                  <span className="bg-slate-800 text-white font-medium px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    Search: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="ml-1 text-slate-400 hover:text-white font-bold">✕</button>
                  </span>
                )}

                {showBookmarksOnly && (
                  <span className="bg-amber-600 text-white font-medium px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    Bookmarked Only
                    <button onClick={() => setShowBookmarksOnly(false)} className="ml-1 text-amber-200 hover:text-white font-bold">✕</button>
                  </span>
                )}

                <button
                  onClick={handleResetFilters}
                  className="text-blue-700 hover:underline font-semibold ml-auto text-xs cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Grid of Cards */}
            {paginatedExchanges.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {paginatedExchanges.map((ex) => (
                  <ExchangeCard
                    key={ex.id}
                    exchange={ex}
                    isBookmarked={bookmarkedIds.includes(ex.id)}
                    onToggleBookmark={handleToggleBookmark}
                    onClick={setSelectedExchange}
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-slate-50/80 rounded-2xl border border-dashed border-slate-300 p-8">
                <ListFilter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="font-bold text-slate-800 text-base mb-1">No dapps found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
                  We couldn't find any crypto exchanges matching your current filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pt-6 flex items-center justify-center gap-2 text-xs font-semibold text-slate-700">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-blue-600 text-white font-bold shadow-xs'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Bottom Related Collections */}
      <RelatedCollections
        onSelectCategory={(categoryTitle) => {
          if (categoryTitle.includes('DEXs')) {
            setSelectedTag('Decentralized Exchanges (DEXs)');
          } else if (categoryTitle.includes('Hardware')) {
            setSelectedTag('Hardware Wallets');
          } else {
            setSelectedTag(null);
          }
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }}
      />

      {/* Detailed Modal view */}
      <ExchangeDetailModal
        exchange={selectedExchange}
        onClose={() => setSelectedExchange(null)}
        isBookmarked={selectedExchange ? bookmarkedIds.includes(selectedExchange.id) : false}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

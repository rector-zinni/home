import React, { useState } from 'react';
import { Send, Twitter, Linkedin, Youtube, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand & Newsletter section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl text-white">
              <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                ▲
              </div>
              <span className="font-extrabold text-white tracking-tight">alchemy</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The web3 development platform trusted by top teams to build scalable decentralized applications.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 bg-slate-900/60 rounded-2xl p-6 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                Supercharge your inbox
              </h4>
              <p className="text-xs text-slate-400">
                Sign up for our developer newsletter for Web3 updates and guides.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full md:w-auto flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-64 px-3.5 py-2 bg-slate-950 text-white text-xs rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-slate-950 hover:bg-slate-100 text-xs font-bold rounded-xl transition-colors cursor-pointer flex-shrink-0"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-b border-slate-800 text-xs">
          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px]">Products</h5>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">RPC API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Wallets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rollups</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NFT API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webhooks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WebSockets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transfers API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Token API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bundler API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gas Manager API</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px]">Developers</h5>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Sign up</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Faucets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gwei calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chain directory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Request a chain</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Snapshots</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px]">Community</h5>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Alchemy University</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Overviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App store</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Startup program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Offchain bug bounties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Onchain bug bounties</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px]">Company</h5>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px]">Contact</h5>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Alchemy Insights, Inc. · All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

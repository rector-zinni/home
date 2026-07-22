import { CryptoExchange } from '../types';

const EXCHANGE_DOMAIN_MAP: Record<string, string> = {
  zengo: 'zengo.com',
  kraken: 'kraken.com',
  robinhood: 'robinhood.com',
  trezor: 'trezor.io',
  coinbase: 'coinbase.com',
  'binance-us': 'binance.us',
  binance: 'binance.com',
  matcha: 'matcha.xyz',
  ledger: 'ledger.com',
  kucoin: 'kucoin.com',
  gate: 'gate.io',
  huobi: 'huobi.com',
  mexc: 'mexc.com',
  bitstamp: 'bitstamp.net',
  gemini: 'gemini.com',
  okx: 'okx.com',
  bybit: 'bybit.com',
  'crypto-com': 'crypto.com',
  bithumb: 'bithumb.com',
  'odos-xyz': 'odos.xyz',
  croswap: 'croswap.io',
  lifi: 'lifi.io',
  'trader-joe': 'traderjoe.xyz',
  syndr: 'syndr.vision',
  icrosschain: 'icrosschain.com',
  bybarter: 'bybarter.com',
  coinmate: 'coinmate.io',
  'fcon-dex': 'fcon.com',
  'inx-one': 'inx.one',
  egemoney: 'egemoney.com',
  bydfi: 'bydfi.com',
  fomo: 'fomo.com'
};

const CHAIN_ICON_MAP: Record<string, string> = {
  aptos: 'https://icons.llamao.fi/icons/chains/rsz_aptos',
  arbitrum: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum',
  avalanche: 'https://icons.llamao.fi/icons/chains/rsz_avalanche',
  base: 'https://icons.llamao.fi/icons/chains/rsz_base',
  bitcoin: 'https://icons.llamao.fi/icons/chains/rsz_bitcoin',
  'bnb chain': 'https://icons.llamao.fi/icons/chains/rsz_bnb',
  celo: 'https://icons.llamao.fi/icons/chains/rsz_celo',
  cosmos: 'https://icons.llamao.fi/icons/chains/rsz_cosmos',
  cronos: 'https://icons.llamao.fi/icons/chains/rsz_cronos',
  ethereum: 'https://icons.llamao.fi/icons/chains/rsz_ethereum',
  fantom: 'https://icons.llamao.fi/icons/chains/rsz_fantom',
  optimism: 'https://icons.llamao.fi/icons/chains/rsz_optimism',
  polygon: 'https://icons.llamao.fi/icons/chains/rsz_polygon',
  solana: 'https://icons.llamao.fi/icons/chains/rsz_solana',
  tron: 'https://icons.llamao.fi/icons/chains/rsz_tron',
  dogecoin: 'https://icons.llamao.fi/icons/chains/rsz_dogecoin',
  ripple: 'https://icons.llamao.fi/icons/chains/rsz_xrp',
  monero: 'https://icons.llamao.fi/icons/chains/rsz_monero',
  zksync: 'https://icons.llamao.fi/icons/chains/rsz_zksync'
};

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export const getExchangeLogoUrl = (exchange: Pick<CryptoExchange, 'id' | 'name'>) => {
  const key = exchange.id.toLowerCase();
  const domain = EXCHANGE_DOMAIN_MAP[key];

  if (domain) {
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  }

  const fallbackDomain = exchange.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .replace(/exchange|wallet|labs|xyz|io|com|app|inc|llc/g, '');

  return fallbackDomain ? `https://www.google.com/s2/favicons?domain=${fallbackDomain}.com&sz=128` : undefined;
};

export const getChainIconUrl = (chain: string) => {
  const normalized = slugify(chain);
  return CHAIN_ICON_MAP[normalized] || undefined;
};

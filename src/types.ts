export type CategoryTag = 
  | 'Free Customers' 
  | 'Enterprise Customers' 
  | 'Crypto Exchanges' 
  | 'Software Wallets' 
  | 'Hardware Wallets' 
  | 'Decentralized Exchanges (DEXs)' 
  | 'Decentralized Derivatives' 
  | 'Web3 Bridges' 
  | 'Crypto Trading Tools';

export type ChainOption = 
  | 'Aptos' 
  | 'Arbitrum' 
  | 'Avalanche' 
  | 'Base' 
  | 'Bitcoin' 
  | 'BNB Chain' 
  | 'Cello' 
  | 'Cosmos' 
  | 'Cronos' 
  | 'Ethereum' 
  | 'Fantom'
  | 'Solana'
  | 'Polygon'
  | 'Optimism'
  | 'zkSync'
  | 'Dogecoin'
  | 'TRON'
  | 'Ripple'
  | 'Monero';

export interface CryptoExchange {
  id: string;
  name: string;
  logoUrl?: string;
  bgIconColor?: string;
  tags: CategoryTag[];
  description: string;
  chains: ChainOption[];
  rating: number;
  usersCount?: string;
  volume24h?: string;
  foundedYear?: string;
  headquarters?: string;
  isVerified?: boolean;
  featured?: boolean;
}

export interface CollectionCard {
  id: string;
  title: string;
  count: number;
  iconName: string;
  description: string;
}

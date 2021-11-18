import { Profile } from "./Users";

export interface Offer {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  categories: string[];
  authors: Profile[];
  verified: boolean;
  tokenPrice: number;
  tokensAvailable: number;
  tokensTotal: number;
  earlyInvestment: boolean;
}

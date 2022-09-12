import { IWalletData } from "./IWalletData";

export interface IWallet {
  subHeading: string;
  heading: string;
  content: string;
  walletData: IWalletData[];
}

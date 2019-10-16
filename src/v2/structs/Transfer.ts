import { TransferStatusDefaultBankAccount, TransferStatusP2P } from '../enums';

export interface Transfer {
  id?: string;
  creationDate?: string;
  amount?: number;
  status?: TransferStatusDefaultBankAccount | TransferStatusP2P;
  digitalAccountId?: string;
  Recipient?: {
    document?: string;
  };
}

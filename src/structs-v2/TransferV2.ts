import { TransferStatusDefaultBankAccountV2, TransferStatusP2PV2 } from '../enums-v2';

export interface TransferV2 {
  id?: string;
  creationDate?: string;
  amount?: number;
  status?: TransferStatusDefaultBankAccountV2 | TransferStatusP2PV2;
  digitalAccountId?: string;
  Recipient?: {
    document?: string;
  };
}

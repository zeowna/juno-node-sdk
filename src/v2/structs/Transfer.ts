import { TransferStatusDefaultBankAccount, TransferStatusP2P } from '../enums';
import { JunoEntity } from './JunoEntity';

export interface Transfer extends JunoEntity {
  creationDate: string;
  amount: number;
  status: TransferStatusDefaultBankAccount | TransferStatusP2P;
  digitalAccountId: string;
  recipient: {
    document: string;
  };
}

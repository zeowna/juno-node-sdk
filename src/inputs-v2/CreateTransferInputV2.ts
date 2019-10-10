import { TransferTypesV2 } from '../enums-v2';
import { CreateTransferInputV2 } from './index';

export interface CreateTransferDefaultBankInput {
  token: string;
  type: TransferTypesV2.DEFAULT_BANK_ACCOUNT;
  amount?: number;
}

export interface CreateTransferP2PInput {
  type: TransferTypesV2.P2P;
  document: string;
  amount: number;
}

export type CreateTransferInputV2 = CreateTransferDefaultBankInput | CreateTransferP2PInput;

import { BankAccountType } from '../enums';
import { AccountHolder } from './AccountHolder';
import { JunoEntity } from './JunoEntity';

export interface BankAccount extends JunoEntity {
  ispb?: string;
  accountComplementNumber: string;
  accountNumber: string;
  accountType: BankAccountType;
  agencyNumber: string;
  bankNumber: string;
  accountHolder?: AccountHolder;
}

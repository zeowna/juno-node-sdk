import { AccountHolder } from './AccountHolder';
import { JunoEntity } from './JunoEntity';

export interface BankAccount extends JunoEntity {
  accountComplementNumber: string;
  accountNumber: string;
  accountType: string;
  agencyNumber: string;
  bankNumber: string;
  accountHolder?: AccountHolder;
}

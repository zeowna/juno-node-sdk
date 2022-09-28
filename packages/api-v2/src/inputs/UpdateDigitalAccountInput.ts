import { Address, BankAccount, LegalRepresentative } from '../entities';
import { JunoEntity } from '../entities/JunoEntity';

export type AddressInput = Omit<Address, keyof JunoEntity>;
export type BankAccountInput = Omit<BankAccount, keyof JunoEntity>;
export type LegalRepresentativeInput = Omit<LegalRepresentative, keyof JunoEntity>;

export interface UpdateDigitalAccountInput {
  companyType?: string;
  name?: string;
  birthDate?: string;
  linesOfBusiness?: string;
  email?: string;
  phone?: string;
  businessArea?: number;
  tradingName?: string;
  address?: AddressInput;
  bankAccount?: BankAccountInput;
  legalRepresentative?: LegalRepresentativeInput;
}

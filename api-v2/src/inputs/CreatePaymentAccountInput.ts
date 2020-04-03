import { Address, BankAccount, LegalRepresentative } from '../entities';
import { JunoEntity } from '../entities/JunoEntity';

type AddressInput = Omit<Address, keyof JunoEntity>;
type BankAccountInput = Omit<BankAccount, keyof JunoEntity>;
type LegalRepresentativeInput = Omit<LegalRepresentative, keyof JunoEntity>;

export interface CreatePaymentAccountInput {
  companyType: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  businessArea: number;
  tradingName: string;
  birthDate: string;
  address: AddressInput;
  bankAccount: BankAccountInput;
  legalRepresentative: LegalRepresentativeInput;
  type: 'PAYMENT';
  linesOfBusiness: string;
  emailOptOut: boolean;
  autoApprove: boolean;
  autoTransfer: boolean;
}

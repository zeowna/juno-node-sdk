import { Address, BankAccount, LegalRepresentative } from '../entities';
import { JunoEntity } from '../entities/JunoEntity';

type AddressInput = Omit<Address, keyof JunoEntity>;
type BankAccountInput = Omit<BankAccount, keyof JunoEntity>;
type LegalRepresentativeInput = Omit<LegalRepresentative, keyof JunoEntity>;

export interface CreatePaymentAccountInput {
  name: string;
  document: string;
  email: string;
  phone: string;
  businessArea: number;
  birthDate: string;
  address: AddressInput;
  bankAccount: BankAccountInput;
  type: 'PAYMENT';
  companyType?: string;
  tradingName?: string;
  legalRepresentative?: LegalRepresentativeInput;
  linesOfBusiness?: string;
  emailOptOut?: boolean;
  autoApprove?: boolean;
  autoTransfer?: boolean;
}

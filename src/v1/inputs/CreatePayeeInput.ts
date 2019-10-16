import { BankAccountTypes, CompanyTypes } from '../enums';

export interface CreatePayeeInput {
  token?: string;
  notificationUrl?: string;
  name?: string;
  cpfCnpj?: string;
  email?: string;
  password?: string;
  birthDate?: string;
  phone?: string;
  linesOfBusiness?: string;
  tradingName?: string;
  companyType?: CompanyTypes;
  businessAreaId?: number;
  reprName?: string;
  reprCpfCnpj?: string;
  reprBirthDate?: string;
  accountHolderName?: string;
  accountHolderCpfCnpj?: string;
  bankNumber?: string;
  agencyNumber?: string;
  accountNumber?: string;
  bankAccountType?: BankAccountTypes;
  accountComplementNumber?: string;
  street?: string;
  number?: number;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  postCode?: string;

  // Advanced fields
  emailOptOut?: boolean;
  autoApprove?: boolean;
  autoTransfer?: boolean;
}

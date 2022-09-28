import { Address } from '../entities';
import { JunoEntity } from '../entities/JunoEntity';

type AddressInput = Omit<Address, keyof JunoEntity>;

export interface ChargeSplitInput {
  recipientToken: string;
  amount: number;
  percentage: number;
  amountRemainder: boolean;
  chargeFee: boolean;
}

export interface ChargeInput {
  pixKey?: string;
  description: string;
  references?: Array<string>;
  totalAmount?: number;
  amount?: number;
  dueData?: Date;
  installments?: number;
  maxOverDueDays?: number;
  fine?: number;
  interest?: number;
  discountAmount?: 0;
  discountDays?: number;
  paymentTypes?: Array<string>;
  paymentAdvance?: boolean;
  feeSchemaToken?: string;
  split?: Array<ChargeSplitInput>;
}

export interface BillingInput {
  name: string;
  document: string;
  email?: string;
  address?: AddressInput;
  secondaryEmail?: string;
  phone?: string;
  birthDate?: Date;
  notify?: boolean;
}

export interface CreateChargeInput {
  charge: ChargeInput;
  billing: BillingInput;
}

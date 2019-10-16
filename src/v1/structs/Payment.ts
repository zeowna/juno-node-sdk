import { PaymentStatus, PaymentTypes } from '../enums';

export interface Payment {
  id?: number;
  amount?: string;
  date?: string;
  fee?: string;
  type?: PaymentTypes;
  status?: PaymentStatus;
  creditCardId?: string;
}

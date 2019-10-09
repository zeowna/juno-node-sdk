import { PaymentStatusV1, PaymentTypesV1 } from '../enums-v1';

export interface PaymentV1 {
  id?: number;
  amount?: string;
  date?: string;
  fee?: string;
  type?: PaymentTypesV1;
  status?: PaymentStatusV1;
  creditCardId?: string;
}

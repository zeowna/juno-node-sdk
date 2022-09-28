import { JunoEntity } from '../entities/JunoEntity';
import { BilletDetails, Payment } from '../entities';

export interface GetChargeByIdResponse extends JunoEntity {
  code: number;
  reference: string;
  dueDate: Date;
  link: string;
  checkoutUrl: string;
  installmentLink: string;
  payNumber: string;
  amount: number;
  billetDetails: BilletDetails;
  payments: Payment[];
}

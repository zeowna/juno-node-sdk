import { JunoEntity } from './JunoEntity';
import { BilletDetails } from './BilletDetails';
import { Payment } from './Payment';

export interface Charge extends JunoEntity {
  code: number;
  reference: string;
  dueDate: string | Date;
  link: string;
  checkoutUrl: string;
  installmentLink: string;
  payNumber: string;
  amount: number;
  billetDetails: BilletDetails;
  payments: Payment[];
}

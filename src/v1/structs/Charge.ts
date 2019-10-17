import { Payment } from './Payment';

export interface Charge {
  code?: number;
  reference?: string;
  dueDate?: string;
  link?: string;
  checkoutUrl?: string;
  installmentLink?: string;
  payNumber?: string;
  billetDetails?: {
    bankAccount?: string;
    ourNumber?: string;
    barcodeNumber?: string;
    portfolio?: string;
  };
  payments: Payment[];
}

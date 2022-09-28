import { JunoEntity } from './JunoEntity';

export interface BilletDetails extends JunoEntity{
  bankAccount: string;
  ourNumber: string;
  barcodeNumber: string;
  portfolio: string;
}

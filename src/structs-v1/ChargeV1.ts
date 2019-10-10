export interface ChargeV1 {
  code?: number;
  reference?: string;
  dueDate?: string;
  link?: string;
  checkoutUrl?: string;
  installmentLink?: string;
  payNumber?: string;
}

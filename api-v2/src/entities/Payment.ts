import { JunoEntity } from './JunoEntity';

export interface Payment extends JunoEntity {
  chargeId: string;
  date: Date;
  releaseDate: Date;
  amount: number;
  fee: number;
  type: string;
  status: string;
  transactionId: string;
  failReason: string;
}

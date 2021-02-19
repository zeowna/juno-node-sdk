import { Payment } from '../entities';
import { JunoEntity } from '../entities/JunoEntity';

export interface PaymentPayResponse extends JunoEntity {
    transactionId: string;
    installments: number;
    payments: Array<Payment>
}

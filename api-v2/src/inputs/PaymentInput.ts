import { Address } from '../entities';
import { JunoEntity } from '../entities/JunoEntity';

type AddressInput = Omit<Address, keyof JunoEntity>;

export interface PaymentBillingInput {
    email: string,
    address: AddressInput,
    delayed: boolean
}

export interface CreditCardDetails {
    creditCardId: string
    creditCardHash: string
}

export interface PaymentInput {
    chargeId: string
    billing: PaymentBillingInput
    creditCardDetails: CreditCardDetails
}
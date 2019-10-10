import { ChargeV1 } from '../structs-v1/ChargeV1';
import { PaymentV1 } from '../structs-v1/PaymentV1';
import { DefaultResponseV1 } from './DefaultResponseV1';

export interface FetchPaymentDetailsResponseV1 extends DefaultResponseV1 {
  data: {
    payment?: PaymentV1;
    charge?: ChargeV1;
  };
}

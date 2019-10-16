import { Charge } from '../structs/Charge';
import { Payment } from '../structs/Payment';
import { DefaultResponse } from './DefaultResponse';

export interface FetchPaymentDetailsResponse extends DefaultResponse {
  data: {
    payment?: Payment;
    charge?: Charge;
  };
}

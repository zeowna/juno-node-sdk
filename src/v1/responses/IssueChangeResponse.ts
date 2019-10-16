import { Charge } from '../structs/Charge';
import { Payment } from '../structs/Payment';
import { DefaultResponse } from './DefaultResponse';

export interface IssueChangeResponse extends DefaultResponse {
  data: {
    charges: Charge[];
    payments: Payment[];
  };
}

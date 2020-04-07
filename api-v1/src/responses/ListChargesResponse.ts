import { DefaultResponse } from './DefaultResponse';
import { Charge } from '../structs';

export interface ListChargesResponse extends DefaultResponse {
  data: {
    charges: Charge[];
  };
}

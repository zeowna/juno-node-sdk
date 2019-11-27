import { Balance } from '../structs';
import { DefaultResponse } from './DefaultResponse';

export interface FetchBalanceResponse extends DefaultResponse {
  data: Balance;
}

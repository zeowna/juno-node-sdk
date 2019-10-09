import { BalanceV1 } from '../structs-v1';
import { DefaultResponseV1 } from './DefaultResponseV1';

export interface FetchBalanceResponseV1 extends DefaultResponseV1 {
  data: BalanceV1;
}

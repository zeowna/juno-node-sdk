import { FetchBalanceResponseV1 } from '../responses-v1';
import { BaseResourceV1 } from './BaseResourceV1';

/**
 * BalanceV1 Resource
 *
 * Handle BalanceV1 requests
 */
export class BalanceResourceV1 extends BaseResourceV1 {
  /**
   * Gets the balance
   * @param token User Token
   */
  public fetchBalance(token: string) {
    return this.doRequest<FetchBalanceResponseV1>('/fetch-balance', {}, token);
  }
}

import { FetchBalanceResponse } from '../responses';
import { BaseResource } from './BaseResource';

/**
 * Balance Resource
 *
 * Handle Balance requests
 */
export class BalancesResource extends BaseResource {
  /**
   * Gets the balance
   * @param token User Token
   */
  public fetchBalance(token: string) {
    return this.doRequest<FetchBalanceResponse>('/fetch-balance', {}, token);
  }
}

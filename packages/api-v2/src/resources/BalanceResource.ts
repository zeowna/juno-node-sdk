import { BaseResource } from './BaseResource';
import { Balance } from '../entities';

export class BalanceResource extends BaseResource {
  protected readonly baseUri= '/balance';

  getBalance(token: string) {
    return this.httpGet<Balance>('/', token);
  }
}

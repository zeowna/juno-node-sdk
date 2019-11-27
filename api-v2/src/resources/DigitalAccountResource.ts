import { UpdateDigitalAccountInput } from '../inputs';
import { UpdateDigitalAccountResponse } from '../responses';
import { BaseResource } from './BaseResource';

export class DigitalAccountResource extends BaseResource {
  protected readonly baseUri = '/digital-accounts';

  async update(payload: UpdateDigitalAccountInput, token: string) {
    return this.httpPatch<UpdateDigitalAccountResponse>('/', payload, token);
  }
}

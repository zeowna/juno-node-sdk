import { CreatePaymentAccountInput, CreateReceivingAccountInput, UpdateDigitalAccountInput } from '../inputs';
import { CreateDigitalAccountResponse, GetDigitalAccountResponse, UpdateDigitalAccountResponse } from '../responses';
import { BaseResource } from './BaseResource';

export class DigitalAccountResource extends BaseResource {
  protected readonly baseUri = '/digital-accounts';

  async get(token: string) {
    return this.httpGet<GetDigitalAccountResponse>('/', token);
  }

  async create(payload: CreatePaymentAccountInput | CreateReceivingAccountInput, token: string) {
    return this.httpPost<CreateDigitalAccountResponse>('/', payload, token);
  }

  async update(payload: UpdateDigitalAccountInput, token: string) {
    return this.httpPatch<UpdateDigitalAccountResponse>('/', payload, token);
  }
}

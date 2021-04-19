import { BaseResource } from './BaseResource';
import { GetChargeByIdResponse, GetChargesInput, GetChargesResponse, CreateChargesResponse } from '../responses';
import { CreateChargeInput } from '../inputs';

export class ChargeResource extends BaseResource {
  protected readonly baseUri = '/charges';

  get(filter: GetChargesInput) {
    return this.httpGet<GetChargesResponse>('/', undefined, filter);
  }

  getById(id: string) {
    return this.httpGet<GetChargeByIdResponse>(`/${id}`);
  }
  
  create(charge: CreateChargeInput) {
    return this.httpPost<CreateChargesResponse>('/', charge);
  }
  
}

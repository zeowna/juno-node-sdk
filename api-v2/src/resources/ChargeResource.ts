import { BaseResource } from './BaseResource';
import { GetChargeByIdResponse, GetChargesInput, GetChargesResponse } from '../responses';

export class ChargeResource extends BaseResource {
  protected readonly baseUri = '/charges';

  get(filter: GetChargesInput) {
    return this.httpGet<GetChargesResponse>('/', undefined, filter);
  }

  getById(id: string) {
    return this.httpGet<GetChargeByIdResponse>(`/${id}`);
  }
  
  create(charge: PostChargeInput) {
    return this.httpPost<PostChargeResponse>('/', charge);
  }
  
}

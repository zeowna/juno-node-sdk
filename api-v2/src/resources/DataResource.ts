import { BaseResource } from './BaseResource';
import { Bank } from '../entities/Bank';
import { GetListResponse } from '../responses';

export class DataResource extends BaseResource {
  protected readonly baseUri = '/data';

  async getBanks() {
    return this.httpGet<GetListResponse<{ banks: Bank[] }>>('/banks');
  }
}

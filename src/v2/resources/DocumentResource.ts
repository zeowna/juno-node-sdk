import { GetListResponse } from '../responses';
import { BaseResource } from './BaseResource';
import { Document } from '../structs';

export class DocumentResource extends BaseResource {
  protected readonly baseUri = '/documents';

  public get(token: string) {
    return this.httpGet<GetListResponse<{ documents: Document }>>('/', token);
  }

  public getById(id: string, token: string) {
    return this.httpGet<Document>(`/${id}`, token);
  }
}

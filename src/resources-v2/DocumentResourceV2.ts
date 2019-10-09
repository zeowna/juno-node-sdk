import { GetListResponseV2 } from '../responses-v2';
import { BaseResourceV2 } from './BaseResourceV2';
import { DocumentV2 } from '../structs-v2';

export class DocumentResourceV2 extends BaseResourceV2 {
  protected readonly baseUri = '/documents';

  public get(token: string) {
    return this.httpGet<GetListResponseV2<{ documents: DocumentV2 }>>('/', token);
  }

  public getById(id: string, token: string) {
    return this.httpGet<DocumentV2>(`/${id}`, token);
  }
}

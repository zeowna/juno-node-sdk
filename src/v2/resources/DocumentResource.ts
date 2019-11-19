import { ReadStream } from 'fs';
import { GetListResponse } from '../responses';
import { BaseResource } from './BaseResource';
import { Document } from '../entities';

export class DocumentResource extends BaseResource {
  protected readonly baseUri = '/documents';

  get(token: string) {
    return this.httpGet<GetListResponse<{ documents: Document[] }>>('/', token);
  }

  getById(id: string, token: string) {
    return this.httpGet<Document>(`/${id}`, token);
  }

  uploadDocument(id: string, readStreams: ReadStream[], token: string) {
    return this.httpPostMultipart<Document>(`/${id}/files`, readStreams, token);
  }
}

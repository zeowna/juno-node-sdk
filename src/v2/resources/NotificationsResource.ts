import { BaseResource } from './BaseResource';
import { GetListResponse } from '../responses';
import { EventType, Webhook } from '../entities';
import { CreateWebhookInput, UpdateWebhookInput } from '../inputs';

export class NotificationsResource extends BaseResource {
  protected readonly baseUri = '/notifications';

  getWebhooks(token?: string) {
    return this.httpGet<GetListResponse<{ webhooks: NotificationsResource }>>('/webhooks', token);
  }

  getWebHookById(id: string, token: string) {
    return this.httpGet<NotificationsResource>(`/webhooks/${id}`, token);
  }

  createWebhook({ token = undefined, ...payload }: CreateWebhookInput) {
    return this.httpPost<Webhook>('/webhooks/', payload, token);
  }

  updateWebhook({ token, id, ...payload }: UpdateWebhookInput) {
    return this.httpPatch<Webhook>(`/webhooks/${id}`, payload, token);
  }

  removeWebhook({ token, id }: UpdateWebhookInput) {
    return this.httpDelete<Webhook>(`/webhooks/${id}`, token);
  }

  getEventTypes() {
    return this.httpGet<GetListResponse<{ eventTypes: EventType[] }>>('/event-types');
  }
}

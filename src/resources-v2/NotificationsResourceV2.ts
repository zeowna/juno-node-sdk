import { BaseResourceV2 } from './BaseResourceV2';
import { GetListResponseV2 } from '../responses-v2';
import { EventTypeV2, WebhookV2 } from '../structs-v2';
import { CreateWebhookInputV2, UpdateWebhookInputV2 } from '../inputs-v2';

export class NotificationsResourceV2 extends BaseResourceV2 {
   protected readonly baseUri = '/notifications';

   getWebhooks(token?: string) {
     return this.httpGet<GetListResponseV2<{ webhooks: NotificationsResourceV2 }>>('/webhooks', token);
   }

   getWebHookById(id: string, token: string) {
     return this.httpGet<NotificationsResourceV2>(`/webhooks/${id}`, token);
   }

   createWebhook({ token = undefined, ...payload }: CreateWebhookInputV2) {
     return this.httpPost<WebhookV2>('/webhooks/', payload, token);
   }

   updateWebhook({ token, id, ...payload }: UpdateWebhookInputV2) {
     return this.httpPatch<WebhookV2>(`/webhooks/${id}`, payload, token);
   }

   removeWebhook({ token, id }: UpdateWebhookInputV2) {
     return this.httpDelete<WebhookV2>(`/webhooks/${id}`, token);
   }

   getEventTypes() {
     return this.httpGet<GetListResponseV2<{ eventTypes: EventTypeV2[] }>>('/event-types');
   }
}

import { WebhookStatus } from '../enums';

export interface UpdateWebhookInput {
  id: string;
  token?: string;
  status: WebhookStatus;
  eventTypes: string[];
}

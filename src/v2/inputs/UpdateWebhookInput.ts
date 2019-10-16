import { WenhookStatus } from '../enums';

export interface UpdateWebhookInput {
  id: string;
  token?: string;
  status: WenhookStatus;
  eventTypes: string[];
}

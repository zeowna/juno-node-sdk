import { WenhookStatusV2 } from '../enums-v2';

export interface UpdateWebhookInputV2 {
  id: string;
  token?: string;
  status: WenhookStatusV2;
  eventTypes: string[];
}

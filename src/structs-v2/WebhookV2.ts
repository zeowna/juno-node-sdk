import { LinkV2 } from './LinkV2';
import { EventTypeV2 } from './EventTypeV2';
import { WenhookStatusV2 } from '../enums-v2';

export interface WebhookV2 {
  id: string;
  url: string;
  status: WenhookStatusV2;
  eventTypes: EventTypeV2[];
  _links: {
    self: LinkV2;
    update: LinkV2;
    delete: LinkV2;
    events: LinkV2;
  };
}

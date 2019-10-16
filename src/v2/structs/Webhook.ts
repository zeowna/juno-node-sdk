import { Link } from './Link';
import { EventType } from './EventType';
import { WenhookStatus } from '../enums';

export interface Webhook {
  id: string;
  url: string;
  status: WenhookStatus;
  eventTypes: EventType[];
  _links: {
    self: Link;
    update: Link;
    delete: Link;
    events: Link;
  };
}

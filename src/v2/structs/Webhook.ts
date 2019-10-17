import { Link } from './Link';
import { EventType } from './EventType';
import { WebhookStatus } from '../enums';
import { JunoEntity } from './JunoEntity';

export interface Webhook extends JunoEntity {
  url: string;
  status: WebhookStatus;
  eventTypes: EventType[];
  _links: {
    self: Link;
    update: Link;
    delete: Link;
    events: Link;
  };
}

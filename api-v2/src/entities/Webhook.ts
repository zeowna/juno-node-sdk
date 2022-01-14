import { EventType } from './EventType';
import { WebhookStatus } from '../enums';
import { JunoEntity } from './JunoEntity';

export interface Webhook extends JunoEntity {
  url: string;
  status: WebhookStatus;
  eventTypes: EventType[];
  label: string;
}

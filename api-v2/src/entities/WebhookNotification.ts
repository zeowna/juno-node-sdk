import { Notification } from './Notification';

export interface WebhookNotification<T>{
  eventId: string;
  eventType: string;
  timestamp: string;
  data: Notification<T>[];
}

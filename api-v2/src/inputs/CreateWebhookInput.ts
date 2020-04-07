export interface CreateWebhookInput {
  url: string;
  eventTypes: string[];
  token: string;
}

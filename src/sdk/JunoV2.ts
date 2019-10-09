import axios from 'axios';
import { JunoSDKConfig } from '../configs';
import { JUNO_API_BASE_URL_v2, SANDBOX_JUNO_API_BASE_URL_v2 } from '../consts';
import { JunoEnvironmentError } from '../errors';
import { NotificationsResourceV2, TransferResourceV2 } from '../resources-v2';

export class JunoV2 {
  private _transfer: TransferResourceV2;

  private _notifications: NotificationsResourceV2;

  constructor(config: JunoSDKConfig = {}, environment: string, token: string) {
    const { JUNO_AUTH_TOKEN } = process.env;

    const junoClient = axios.create({
      baseURL: JunoV2.setEndpoint(config, environment),
      headers: {
        'X-API-Version': '2',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JUNO_AUTH_TOKEN}`,
      },
    });

    this._transfer = new TransferResourceV2(junoClient, token);
    this._notifications = new NotificationsResourceV2(junoClient, token);
  }

  private static setEndpoint(config: JunoSDKConfig, env: string) {
    if (config.sandbox !== undefined) {
      if (config.sandbox || env === 'sandbox') {
        return SANDBOX_JUNO_API_BASE_URL_v2;
      }
      return JUNO_API_BASE_URL_v2;
    }

    switch (env) {
      case 'sandbox':
        return SANDBOX_JUNO_API_BASE_URL_v2;
      case 'production':
        return JUNO_API_BASE_URL_v2;
      default:
        throw new JunoEnvironmentError('Invalid JUNO_ENV.');
    }
  }

  get transfer() {
    return this._transfer;
  }

  get notifications() {
    return this._notifications;
  }
}

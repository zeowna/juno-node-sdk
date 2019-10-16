import axios from 'axios';
import { JunoEnvironments, JunoSDKConfig } from '../configs';
import {
  JUNO_API_AUTH_URL,
  JUNO_API_BASE_URL_v2, JUNO_CLIENT_ID, JUNO_ENV, JUNO_SECRET, JUNO_TOKEN,
  SANDBOX_JUNO_API_AUTH_URL,
  SANDBOX_JUNO_API_BASE_URL_v2,
} from '../../consts';
import { JunoEnvironmentError } from '../../errors';
import { AuthResource, NotificationsResource, TransfersResource } from '../resources';

export class JunoSDK {
  private readonly _transfers: TransfersResource;
  private readonly _notifications: NotificationsResource;

  constructor(config?: JunoSDKConfig) {
    const configWithEnv: JunoSDKConfig = {
      token: JUNO_TOKEN,
      clientId: JUNO_CLIENT_ID,
      secret: JUNO_SECRET,
      environment: JUNO_ENV,
      ...config,
    };

    JunoSDK.validateEnvironment(configWithEnv);

    const {
      environment, clientId, secret, token,
    } = configWithEnv;

    const junoClient = axios.create({
      baseURL: JunoSDK.setEndpoint(environment),
      headers: {
        'X-API-Version': '2',
        'Content-Type': 'application/json',
      },
    });

    const junoAuthClient = axios.create({
      baseURL: JunoSDK.setAuthEndpoint(environment),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const authResourceV2 = new AuthResource(junoAuthClient, clientId, secret);
    this._transfers = new TransfersResource(junoClient, token, authResourceV2);
    this._notifications = new NotificationsResource(junoClient, token, authResourceV2);
  }

  private static validateEnvironment({
    token, clientId, secret, environment,
  }: JunoSDKConfig) {
    if (!token || typeof token !== 'string') {
      throw new JunoEnvironmentError(`JUNO_TOKEN environment variable is invalid (${token}).`);
    }

    if (!clientId || typeof clientId !== 'string') {
      throw new JunoEnvironmentError(`JUNO_CLIENT_ID environment variable is invalid (${clientId}).`);
    }

    if (!secret || typeof secret !== 'string') {
      throw new JunoEnvironmentError(`JUNO_SECRET environment variable is invalid (${secret}).`);
    }

    const values = Object.values(JunoEnvironments);

    if (!environment || !values.includes(environment)) {
      throw new JunoEnvironmentError(`JUNO_ENV environment variable is invalid (${environment}),`
        + ` it must be either (${values.join('|')}).`);
    }
  }

  private static setAuthEndpoint(environment: JunoEnvironments) {
    switch (environment) {
      case JunoEnvironments.Sandbox:
        return SANDBOX_JUNO_API_AUTH_URL;
      case JunoEnvironments.Production:
        return JUNO_API_AUTH_URL;
      default:
        throw new JunoEnvironmentError('Invalid JUNO_ENV.');
    }
  }

  private static setEndpoint(environment: JunoEnvironments) {
    switch (environment) {
      case JunoEnvironments.Sandbox:
        return SANDBOX_JUNO_API_BASE_URL_v2;
      case JunoEnvironments.Production:
        return JUNO_API_BASE_URL_v2;
      default:
        throw new JunoEnvironmentError('Invalid JUNO_ENV.');
    }
  }

  get transfers() {
    return this._transfers;
  }

  get notifications() {
    return this._notifications;
  }
}

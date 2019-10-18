import axios from 'axios';
import { format as formatStr } from 'util';
import { JunoEnvironments, JunoSDKConfig } from '../configs';
import {
  JUNO_API_AUTH_URLS,
  JUNO_API_BASE_URLS,
  JUNO_CLIENT_ID,
  JUNO_ENV,
  JUNO_SECRET,
  JUNO_TOKEN,
} from '../consts';
import { JunoEnvironmentError } from '../../errors';
import { AuthResource, NotificationsResource, TransfersResource } from '../resources';
import { DocumentResource } from '../resources/DocumentResource';
import { BaseResourceConstructor } from '../resources/BaseResource';

/**
 * JunoSdk class
 *
 * Integration V2 for NodeJS
 */
export class JunoSDK {
  private readonly _transfers: TransfersResource;
  private readonly _notifications: NotificationsResource;
  private readonly _documents: DocumentResource;

  constructor(config?: JunoSDKConfig) {
    const {
      environment, clientId, secret, token,
    } = JunoSDK.mergeConfigWithEnvironment(config);

    const junoAuthClient = JunoSDK.createJunoAuthClient(environment);
    const junoClient = JunoSDK.createJunoClient(environment);

    const authResource = new AuthResource({
      junoAuthClient,
      clientId,
      secret,
    });

    const resourceConstructor: BaseResourceConstructor = {
      junoClient,
      token,
      authResource,
    };

    this._transfers = new TransfersResource(resourceConstructor);
    this._notifications = new NotificationsResource(resourceConstructor);
    this._documents = new DocumentResource(resourceConstructor);
  }

  private static mergeConfigWithEnvironment(config: JunoSDKConfig) {
    const configWithEnv = {
      token: JUNO_TOKEN,
      clientId: JUNO_CLIENT_ID,
      secret: JUNO_SECRET,
      environment: JUNO_ENV,
      ...config,
    };

    JunoSDK.validateEnvironment(configWithEnv);

    return configWithEnv;
  }

  private static createJunoClient(environment: JunoEnvironments) {
    return axios.create({
      baseURL: JunoSDK.setEndpoint(environment),
      headers: {
        'X-API-Version': '2',
        'Content-Type': 'application/json',
      },
    });
  }

  private static createJunoAuthClient(environment: JunoEnvironments) {
    return axios.create({
      baseURL: JunoSDK.setAuthEndpoint(environment),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  private static validateEnvironment({
    token,
    clientId,
    secret,
    environment,
  }: JunoSDKConfig) {
    if (!token || typeof token !== 'string') {
      throw new JunoEnvironmentError(
        `JUNO_TOKEN environment variable is invalid (${token}).`,
      );
    }

    if (!clientId || typeof clientId !== 'string') {
      throw new JunoEnvironmentError(
        `JUNO_CLIENT_ID environment variable is invalid (${clientId}).`,
      );
    }

    if (!secret || typeof secret !== 'string') {
      throw new JunoEnvironmentError(
        `JUNO_SECRET environment variable is invalid (${secret}).`,
      );
    }

    const values = Object.values(JunoEnvironments);

    if (!environment || !values.includes(environment)) {
      const message = 'JUNO_ENV environment variable is invalid (%s), it must be either (%s).';
      throw new JunoEnvironmentError(
        formatStr(message, environment, values.join('|')),
      );
    }
  }

  private static setAuthEndpoint(environment: JunoEnvironments) {
    if (!Object.values(JunoEnvironments).includes(environment)) {
      throw new JunoEnvironmentError('Invalid JUNO_ENV.');
    }

    return JUNO_API_AUTH_URLS[environment];
  }

  private static setEndpoint(environment: JunoEnvironments) {
    if (!Object.values(JunoEnvironments).includes(environment)) {
      throw new JunoEnvironmentError('Invalid JUNO_ENV.');
    }

    return JUNO_API_BASE_URLS[environment];
  }

  /**
   * Transfers resource
   */
  get transfers() {
    return this._transfers;
  }

  /**
   * Documents resource
   */
  get documents() {
    return this._documents;
  }

  /**
   * Notifications resource
   */
  get notifications() {
    return this._notifications;
  }
}

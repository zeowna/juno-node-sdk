import { AxiosInstance } from 'axios';
import * as jwt from 'jsonwebtoken';
import { JunoError } from '../errors';
import { GenerateOauthTokenResponse } from '../inputs';
import { RequestHelper } from '../helpers';

interface AuthResourceConstructor {
  junoAuthClient: AxiosInstance;
  clientId: string;
  secret: string;
}

export class AuthResource {
  private readonly basicToken: string;

  private oAuthTokenData: GenerateOauthTokenResponse;

  private junoClient: AxiosInstance;

  private oAuthToken: string;

  constructor({ junoAuthClient, clientId, secret }: AuthResourceConstructor) {
    this.junoClient = junoAuthClient;
    this.basicToken = Buffer
      .from(`${clientId}:${secret}`)
      .toString('base64');
  }

  private async doRequest<T>(endpoint: string, payload: any): Promise<T> {
    try {
      const encodedPayload = RequestHelper.toEncodedUrlFormat(payload);
      const { data } = await this.junoClient.post(endpoint, encodedPayload, {
        headers: {
          Authorization: `Basic ${this.basicToken}`,
        },
      });

      return data;
    } catch (err) {
      if (err.response) {
        throw new JunoError(err.response.data.message);
      }
      throw err;
    }
  }

  private async generateOAuthToken() {
    this.oAuthTokenData = await this.doRequest<GenerateOauthTokenResponse>('/oauth/token', {
      grant_type: 'client_credentials',
    });

    this.oAuthToken = this.oAuthTokenData.access_token;
    return this.oAuthToken;
  }

  private async refreshOAuthToken() {
    try {
      const decoded = jwt.decode(this.oAuthToken) as Record<string, any>;
      const currentTime = Date.now() / 1000;

      if (decoded?.exp < currentTime) {
        return this.generateOAuthToken();
      }

      return this.oAuthToken;
    } catch (err) {
      return this.generateOAuthToken();
    }
  }

  /**
   * TODO: Implement this method when its documentation became available
   */
  async getOAuthToken() {
    if (!this.oAuthToken) {
      return this.generateOAuthToken();
    }

    return this.refreshOAuthToken();
  }
}

import { AxiosInstance } from 'axios';
import { JunoError } from '../../errors';
import { GenerateOauthTokenResponse } from '../inputs';
import { RequestHelper } from '../../helpers';

interface AuthResourceConstructor {
  junoAuthClient: AxiosInstance;
  clientId: string;
  secret: string;
}

export class AuthResource {
  private readonly basicToken: string;
  private oAuthTokenData: GenerateOauthTokenResponse;
  private junoClient: AxiosInstance

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

    return this.oAuthTokenData.access_token;
  }

  /**
   * TODO: Implement this method when its documentation became available
   */
  private async refreshOAuthToken() {
    throw new Error('Not yet implemented.');
  }

  /**
   * TODO: Implement this method when its documentation became available
   */
  async getOAuthToken() {
    return this.generateOAuthToken();
  }
}

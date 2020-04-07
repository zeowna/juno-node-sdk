import { AxiosInstance } from 'axios';
import { JunoError } from '../errors';
import { RequestHelper } from '../helpers';

/**
 * Base Resource V1 class
 */
export abstract class BaseResource {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    protected readonly junoClient: AxiosInstance,
    protected readonly token: string,
  ) {
  }

  /**
   * Performs a request to Boleto Fácil
   * @param endpoint Endpoint resource
   * @param payload Payload object
   * @param token overrides the default token
   */
  protected async doRequest<T>(endpoint: string, payload: any, token?: string): Promise<T> {
    try {
      const encodedPayload = RequestHelper.toEncodedUrlFormat({
        token: token || this.token,
        ...payload,
      });

      const { data } = await this.junoClient.post(endpoint, encodedPayload);
      return data;
    } catch (err) {
      if (err.response) {
        throw new JunoError(err.response.data.errorMessage);
      }
      throw err;
    }
  }
}

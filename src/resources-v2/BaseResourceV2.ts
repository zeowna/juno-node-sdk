import { AxiosInstance } from 'axios';
import { JunoError } from '../errors';

/**
 * Base Resource class
 */
export abstract class BaseResourceV2 {
  protected abstract readonly baseUri: string

  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly junoClient: AxiosInstance, private readonly token: string) {
  }

  private getCompleteEndpoint(endpoint: string) {
    if (!this.baseUri) {
      throw new Error('baseUri not defined.');
    }

    if (!endpoint) {
      throw new Error('endpoint not defined.');
    }

    return `${this.baseUri}/${endpoint}`;
  }

  private getHeaders(token: string) {
    return {
      headers: {
        'X-Resource-Token': token || this.token,
      },
    };
  }

  private static async handleRequest<T>(request: Promise<any>): Promise<T> {
    try {
      const { data } = await request;
      return data;
    } catch (err) {
      if (err.response) {
        throw new JunoError(err.response.data.details.map((detail: any) => `${detail.message}`));
      }
      throw err;
    }
  }

  protected async httpGet<T>(endpoint: string, token?: string): Promise<T> {
    return BaseResourceV2.handleRequest(
      this.junoClient.get(
        this.getCompleteEndpoint(endpoint),
        this.getHeaders(token),
      ),
    );
  }

  protected async httpPost<T>(endpoint: string, payload: any, token?: string): Promise<T> {
    return BaseResourceV2.handleRequest(
      this.junoClient.post(
        this.getCompleteEndpoint(endpoint),
        payload,
        this.getHeaders(token),
      ),
    );
  }

  protected async httpPut<T>(endpoint: string, payload: any, token?: string): Promise<T> {
    return BaseResourceV2.handleRequest(
      this.junoClient.put(
        this.getCompleteEndpoint(endpoint),
        payload,
        this.getHeaders(token),
      ),
    );
  }

  protected async httpPatch<T>(endpoint: string, payload: any, token?: string): Promise<T> {
    return BaseResourceV2.handleRequest(
      this.junoClient.patch(
        this.getCompleteEndpoint(endpoint),
        payload,
        this.getHeaders(token),
      ),
    );
  }


  protected async httpDelete<T>(endpoint: string, token?: string): Promise<T> {
    return BaseResourceV2.handleRequest(this.junoClient.delete(
      this.getCompleteEndpoint(endpoint),
      this.getHeaders(token),
    ));
  }
}

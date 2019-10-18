import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { JunoError } from '../../errors';
import { AuthResource } from './AuthResource';

export interface BaseResourceConstructor {
  junoClient: AxiosInstance;
  token: string;
  authResource: AuthResource;
}

/**
 * Base Resource V2 class
 */
export abstract class BaseResource {
  protected abstract readonly baseUri: string;
  protected readonly junoClient: AxiosInstance;
  protected readonly token: string;
  private authResource: AuthResource;


  constructor({ junoClient, token, authResource }: BaseResourceConstructor) {
    this.junoClient = junoClient;
    this.token = token;
    this.authResource = authResource;
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

  /**
   * TODO: this.authResource.refreshOAuthToken() method when its documentation became available
   */
  private async getRequestConfig(token: string): Promise<AxiosRequestConfig> {
    const accessToken = await this.authResource.getOAuthToken();
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
    return BaseResource.handleRequest(
      this.junoClient.get(
        this.getCompleteEndpoint(endpoint),
        await this.getRequestConfig(token),
      ),
    );
  }

  protected async httpPost<T>(endpoint: string, payload: any, token?: string): Promise<T> {
    return BaseResource.handleRequest(
      this.junoClient.post(
        this.getCompleteEndpoint(endpoint),
        payload,
        await this.getRequestConfig(token),
      ),
    );
  }

  protected async httpPut<T>(endpoint: string, payload: any, token?: string): Promise<T> {
    return BaseResource.handleRequest(
      this.junoClient.put(
        this.getCompleteEndpoint(endpoint),
        payload,
        await this.getRequestConfig(token),
      ),
    );
  }

  protected async httpPatch<T>(endpoint: string, payload: any, token?: string): Promise<T> {
    return BaseResource.handleRequest(
      this.junoClient.patch(
        this.getCompleteEndpoint(endpoint),
        payload,
        await this.getRequestConfig(token),
      ),
    );
  }


  protected async httpDelete<T>(endpoint: string, token?: string): Promise<T> {
    return BaseResource.handleRequest(this.junoClient.delete(
      this.getCompleteEndpoint(endpoint),
      await this.getRequestConfig(token),
    ));
  }
}

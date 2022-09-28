import {
  AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse,
} from 'axios';
import * as FormData from 'form-data';
import { ReadStream } from 'fs';
import { JunoError } from '../errors';
import { JunoLoggingFn } from '../logging';
import { AuthResource } from './AuthResource';

export interface BaseResourceConstructor {
  junoClient: AxiosInstance;
  token: string;
  authResource: AuthResource;
  loggingFn?: JunoLoggingFn;
}

/**
 * Base Resource V2 class
 */
export abstract class BaseResource {
  protected abstract readonly baseUri: string;
  protected readonly junoClient: AxiosInstance;
  protected readonly token: string;
  protected readonly loggingFn: JunoLoggingFn;
  private authResource: AuthResource;

  constructor({
    junoClient, token, authResource, loggingFn,
  }: BaseResourceConstructor) {
    this.junoClient = junoClient;
    this.token = token;
    this.authResource = authResource;
    this.loggingFn = loggingFn;
  }

  private getCompleteEndpoint(endpoint: string) {
    if (!this.baseUri) {
      throw new Error('baseUri not defined.');
    }

    if (!endpoint) {
      throw new Error('endpoint not defined.');
    }

    return `${this.baseUri}${endpoint}`;
  }

  private async getRequestConfig(token: string, headers: Record<string, string> = {}): Promise<AxiosRequestConfig> {
    const accessToken = await this.authResource.getOAuthToken();
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
        'X-Resource-Token': token || this.token,
      },
    };
  }

  private async logRequest(config: AxiosRequestConfig, statusCode: number, data: any) {
    await this.loggingFn({
      url: `${config.baseURL}${config.url}`,
      method: config.method.toUpperCase(),
      body: config.data,
      params: config.params,
      statusCode,
      response: data,
    });
  }

  private async handleRequest<T>(request: Promise<AxiosResponse<any>>): Promise<T> {
    try {
      const { data, config, status } = await request;

      await this.logRequest(config, status, data);

      return data;
    } catch (err) {
      if (err.isAxiosError) {
        const axiosErr: AxiosError = err;
        const { config, status, data } = axiosErr.response;

        await this.logRequest(
          config,
          status,
          data,
        );

        const message = err.response.data.details
          ? err.response.data.details.map((detail: any) => `${detail.message}`)
          : err.data;

        throw new JunoError(message, err.response.data);
      }
      throw err;
    }
  }

  protected async httpGet<T>(endpoint: string, token?: string, params?: Record<string, any>): Promise<T> {
    return this.handleRequest(
      this.junoClient.get(
        this.getCompleteEndpoint(endpoint),
        {
          params,
          ...await this.getRequestConfig(token),
        },
      ),
    );
  }

  protected async httpPost<T>(endpoint: string, payload: any, token?: string): Promise<T> {
    return this.handleRequest(
      this.junoClient.post(
        this.getCompleteEndpoint(endpoint),
        payload,
        await this.getRequestConfig(token),
      ),
    );
  }

  protected async httpPut<T>(endpoint: string, payload: any, token?: string): Promise<T> {
    return this.handleRequest(
      this.junoClient.put(
        this.getCompleteEndpoint(endpoint),
        payload,
        await this.getRequestConfig(token),
      ),
    );
  }

  protected async httpPatch<T>(endpoint: string, payload: any, token?: string): Promise<T> {
    return this.handleRequest(
      this.junoClient.patch(
        this.getCompleteEndpoint(endpoint),
        payload,
        await this.getRequestConfig(token),
      ),
    );
  }

  protected async httpDelete<T>(endpoint: string, token?: string): Promise<T> {
    return this.handleRequest(this.junoClient.delete(
      this.getCompleteEndpoint(endpoint),
      await this.getRequestConfig(token),
    ));
  }

  protected async httpPostMultipart<T>(endpoint: string, readStreams: ReadStream[], token: string): Promise<T> {
    const form = new FormData();
    readStreams.forEach(readStream => form.append('files', readStream));

    return this.handleRequest(this.junoClient.post(
      this.getCompleteEndpoint(endpoint),
      form,
      await this.getRequestConfig(
        token,
        // multipart/form-data
        form.getHeaders(),
      ),
    ));
  }
}

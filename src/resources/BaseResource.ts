import { AxiosInstance } from "axios";
import { JunoError } from "../errors";

/**
 * Base Resource class
 */
export abstract class BaseResource {
  constructor(private readonly junoClient: AxiosInstance, private readonly token: string) {
  }

  /**
   * Encodes the an object to URL Format
   * @param payload
   */
  private toEncodedUrlFormat(payload: any) {
    return Object.keys(payload).map(key => {
      // @ts-ignore
      return `${key}=${payload[key]}`;
    }).join("&");
  }

  /**
   * Performs a request to Boleto Fácil
   * @param endpoint Endpoint resource
   * @param payload Payload object
   * @param token overrides the default token
   */
  protected async doRequest<T>(endpoint: string, payload: any, token?: string): Promise<T> {
    try {
      const encodedPayload = this.toEncodedUrlFormat({
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

import { AxiosInstance } from "axios";
import { JunoError } from "../errors";

export class BaseResource {
  constructor(private readonly junoClient: AxiosInstance, private readonly token: string) {
  }

  private toEncodedUrlFormat(payload: any) {
    return Object.keys(payload).map(key => {
      // @ts-ignore
      return `${key}=${payload[key]}`;
    }).join("&");
  }

  protected async doRequest<T>(endpoint: string, payload: any): Promise<T> {
    try {
      const encodedPayload = this.toEncodedUrlFormat({
        token: this.token,
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

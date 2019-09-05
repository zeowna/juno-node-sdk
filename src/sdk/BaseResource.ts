import { AxiosInstance } from "axios";

export class BaseResource {
  constructor(private readonly junoClient: AxiosInstance, private readonly token: string) {
  }

  private toEncodedUrlFormat(payload: any) {
    Object.keys(payload).map(key => {
      // @ts-ignore
      return `${key}=${bankSlipData[key]}`;
    }).join("&");
  }

  protected async doRequest<T>(endpoint: string, payload: any): Promise<T> {
    try {
      const { data } = await this.junoClient.post(endpoint, this.toEncodedUrlFormat({
        token: this.token,
        ...payload,
      }));
      return data;
    } catch (err) {
      throw err.response.data;
    }
  }

}

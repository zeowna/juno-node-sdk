import axios, { AxiosError, AxiosInstance } from "axios";
import { BankSlipInput, IssueChangeResponse } from "../structs";

export class JunoSDK {
  private readonly junoClient: AxiosInstance;
  private readonly token: string;

  constructor() {
    this.token = process.env.JUNO_TOKEN;
    this.junoClient = axios.create({
      baseURL: process.env.JUNO_API_BASE_URL,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  private toEncodedUrlFormat(payload: any) {
    Object.keys(payload).map(key => {
      // @ts-ignore
      return `${key}=${bankSlipData[key]}`;
    }).join("&");
  }

  private async doRequest<T>(endpoint: string, payload: any): Promise<T> {
    try {
      const { data } = await this.junoClient.post(endpoint, this.toEncodedUrlFormat(payload));
      return data;
    } catch (err) {
      throw err.response.data;
    }
  }

  public async issueCharge(bankSlipData: BankSlipInput) {
    return this.doRequest<IssueChangeResponse>(
      "/issue-charge",
      bankSlipData,
    );
  }

}

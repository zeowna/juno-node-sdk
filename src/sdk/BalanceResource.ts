import { FetchBalanceResponse } from "../responses";
import { BaseResource } from "./BaseResource";

export class BalanceResource extends BaseResource {
  public fetchBalance(token: string) {
    return this.doRequest<FetchBalanceResponse>("/fetch-balance", { token });
  }
}

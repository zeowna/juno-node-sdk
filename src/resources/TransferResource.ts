import { RequestTransferResponse } from "../responses";
import { BaseResource } from "./BaseResource";

export class TransferResource extends BaseResource {
  public requestTransfer(amount: number) {
    return this.doRequest<RequestTransferResponse>("/request-transfer", { amount });
  }
}

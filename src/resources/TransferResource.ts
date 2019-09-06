import { JunoParamsMissingError } from "../errors";
import { RequestTransferResponse } from "../responses";
import { BaseResource } from "./BaseResource";

/**
 * Transfer Resource class
 *
 * Handle Transfer requests
 */
export class TransferResource extends BaseResource {
  /**
   * Requests a Transfer
   * @param token User token
   * @param amount Amount
   */
  public requestTransfer(token: string, amount?: number) {
    if (!token) {
      throw new JunoParamsMissingError("token wasn't provided.");
    }
    return this.doRequest<RequestTransferResponse>("/request-transfer", { amount }, token);
  }
}

import { JunoParamsMissingError } from '../errors';
import { RequestTransferResponseV1 } from '../responses-v1';
import { BaseResourceV1 } from './BaseResourceV1';

/**
 * TransferV2 Resource class
 *
 * Handle TransferV2 requests
 */
export class TransferResourceV1 extends BaseResourceV1 {
  /**
   * Requests a TransferV2
   * @param token User token
   */
  public requestTransfer(token: string, amount?: number) {
    if (!token) {
      throw new JunoParamsMissingError("token wasn't provided.");
    }
    return this.doRequest<RequestTransferResponseV1>('/request-transfer', { amount }, token);
  }
}

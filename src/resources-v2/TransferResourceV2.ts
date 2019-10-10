import { TransferTypesV2 } from '../enums-v2';
import { JunoParamsMissingError } from '../errors';
import { CreateTransferDefaultBankInput, CreateTransferInputV2 } from '../inputs-v2';
import { TransferV2 } from '../structs-v2';
import { BaseResourceV2 } from './BaseResourceV2';

export class TransferResourceV2 extends BaseResourceV2 {
  protected readonly baseUri = '/transfers';

  /**
   * Requests a TransferV2
   * @param token User token
   * @param requestTransferInput
   */
  public create(requestTransferInput: CreateTransferInputV2) {
    const { token, ...payload } = (requestTransferInput as CreateTransferDefaultBankInput);

    if (!token && payload.type === TransferTypesV2.DEFAULT_BANK_ACCOUNT) {
      throw new JunoParamsMissingError("token wasn't provided.");
    }

    return this.httpPost<TransferV2>('/', payload, token);
  }
}

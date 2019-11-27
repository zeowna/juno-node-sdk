import { TransferTypes } from '../enums';
import { JunoParamsMissingError } from '../errors';
import { CreateTransferDefaultBankInput, CreateTransferInput } from '../inputs';
import { Transfer } from '../entities';
import { BaseResource } from './BaseResource';

export class TransfersResource extends BaseResource {
  protected readonly baseUri = '/transfers';

  /**
   * Requests a Transfer
   * @param token User token
   * @param requestTransferInput
   */
  create(requestTransferInput: CreateTransferInput) {
    const { token, ...payload } = (requestTransferInput as CreateTransferDefaultBankInput);

    if (!token && payload.type === TransferTypes.DEFAULT_BANK_ACCOUNT) {
      throw new JunoParamsMissingError("token wasn't provided.");
    }

    return this.httpPost<Transfer>('/', payload, token);
  }
}

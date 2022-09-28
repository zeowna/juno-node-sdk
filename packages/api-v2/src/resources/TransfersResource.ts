import { TransferTypes } from '../enums';
import { JunoParamsMissingError } from '../errors';
import { CreateTransferDefaultBankInput, CreateTransferInput } from '../inputs';
import { Transfer } from '../entities';
import { BaseResource } from './BaseResource';

export class TransfersResource extends BaseResource {
  protected readonly baseUri = '/transfers';
  readonly _requiredTokenTypes = [
    TransferTypes.DEFAULT_BANK_ACCOUNT,
    TransferTypes.PIX,
  ];

  /**
   * Requests a Transfer
   * @see https://dev.juno.com.br/api/v2#operation/requestTransfer
   * @param token User token
   * @param requestTransferInput
   */
  create(requestTransferInput: CreateTransferInput) {
    const { token, ...payload } = requestTransferInput;

    if (!token && this._requiredTokenTypes.includes(payload.type)) {
      throw new JunoParamsMissingError("token wasn't provided.");
    }

    return this.httpPost<Transfer>('/', payload, token);
  }
}

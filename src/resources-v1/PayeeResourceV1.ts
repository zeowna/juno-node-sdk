import { CreatePayeeInputV1 } from '../inputs-v1';
import { CreatePayeeResponseV1 } from '../responses-v1';
import { BaseResourceV1 } from './BaseResourceV1';

/**
 * Payee Resource class
 *
 * Handle Payee requests
 */
export class PayeeResourceV1 extends BaseResourceV1 {
  /**
   * Created a Payee
   * @param createPayeeInput
   */
  public createPayee(createPayeeInput: CreatePayeeInputV1) {
    return this.doRequest<CreatePayeeResponseV1>('/create-payee', createPayeeInput);
  }
}

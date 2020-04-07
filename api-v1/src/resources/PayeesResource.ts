import { CreatePayeeInput } from '../inputs';
import { CreatePayeeResponse } from '../responses';
import { BaseResource } from './BaseResource';

/**
 * Payee Resource class
 *
 * Handle Payee requests
 */
export class PayeesResource extends BaseResource {
  /**
   * Created a Payee
   * @param createPayeeInput
   */
  public createPayee(createPayeeInput: CreatePayeeInput) {
    return this.doRequest<CreatePayeeResponse>('/create-payee', createPayeeInput);
  }
}

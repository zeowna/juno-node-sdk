import { IssueChargeInput, ListChargeInput } from '../inputs';
import {
  CancelChargeResponse,
  FetchPaymentDetailsResponse,
  IssueChangeResponse,
  ListChargesResponse,
} from '../responses';
import { BaseResource } from './BaseResource';

/**
 * ChargeV1 Resource class
 *
 * Handle ChargeV1 requests
 */
export class ChargesResource extends BaseResource {
  public issueCharge(issueChargeInput: IssueChargeInput) {
    return this.doRequest<IssueChangeResponse>(
      '/issue-charge',
      issueChargeInput,
    );
  }

  public fetchPaymentDetails(paymentToken: string) {
    return this.doRequest<FetchPaymentDetailsResponse>(
      '/fetch-payment-details',
      { paymentToken },
    );
  }

  public listCharges(listChargeInput: ListChargeInput) {
    return this.doRequest<ListChargesResponse>(
      '/list-charges',
      listChargeInput,
    );
  }

  public cancelCharge(code: string) {
    return this.doRequest<CancelChargeResponse>('/cancel-charge', { code });
  }
}

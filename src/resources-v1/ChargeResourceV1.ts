import { IssueChargeInputV1, ListChargeInputV1 } from '../inputs-v1';
import {
  CancelChargeResponseV1,
  FetchPaymentDetailsResponseV1,
  IssueChangeResponseV1,
  ListChargesResponseV1,
} from '../responses-v1';
import { BaseResourceV1 } from './BaseResourceV1';

/**
 * ChargeV1 Resource class
 *
 * Handle ChargeV1 requests
 */
export class ChargeResourceV1 extends BaseResourceV1 {
  public issueCharge(issueChargeInput: IssueChargeInputV1) {
    return this.doRequest<IssueChangeResponseV1>(
      '/issue-charge',
      issueChargeInput,
    );
  }

  public fetchPaymentDetails(paymentToken: string) {
    return this.doRequest<FetchPaymentDetailsResponseV1>(
      '/fetch-payment-details',
      { paymentToken },
    );
  }

  public listCharges(listChargeInput: ListChargeInputV1) {
    return this.doRequest<ListChargesResponseV1>(
      '/list-charges',
      listChargeInput,
    );
  }

  public cancelCharge(code: string) {
    return this.doRequest<CancelChargeResponseV1>('/cancel-charge', { code });
  }
}

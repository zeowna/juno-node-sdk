import { IssueChargeInput, ListChargeInput } from "../inputs";
import {
  CancelChargeResponse,
  FetchPaymentDetailsResponse,
  IssueChangeResponse,
  ListChargesResponse,
} from "../responses";
import { BaseResource } from "./BaseResource";

/**
 * Charge Resource class
 *
 * Handle Charge requests
 */
export class ChargeResource extends BaseResource {
  public issueCharge(issueChargeInput: IssueChargeInput) {
    return this.doRequest<IssueChangeResponse>(
      "/issue-charge",
      issueChargeInput,
    );
  }

  public fetchPaymentDetails(paymentToken: string) {
    return this.doRequest<FetchPaymentDetailsResponse>(
      "/fetch-payment-details",
      { paymentToken },
    );
  }

  public listCharges(listChargeInput: ListChargeInput) {
    return this.doRequest<ListChargesResponse>(
      "/list-charges",
      listChargeInput,
    );
  }

  public cancelCharge(code: string) {
    return this.doRequest<CancelChargeResponse>("/cancel-charge", { code });
  }
}

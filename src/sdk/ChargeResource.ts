import {
  CancelChargeResponse,
  DefaultResponse,
  FetchPaymentDetailsResponse,
  IssueChangeResponse,
  ListChargesResponse,
} from "../responses";
import { BankSlipInput, ChargesData } from "../structs";
import { BaseResource } from "./BaseResource";

/**
 * Charge Resource class
 */
export class ChargeResource extends BaseResource {
  public issueCharge(bankSlipData: BankSlipInput) {
    return this.doRequest<IssueChangeResponse>(
      "/issue-charge",
      bankSlipData,
    );
  }

  public fetchPaymentDetails(paymentToken: string) {
    return this.doRequest<FetchPaymentDetailsResponse>(
      "/fetch-payment-details",
      { paymentToken },
    );
  }

  public listCharges(chargesData: ChargesData) {
    return this.doRequest<ListChargesResponse>(
      "/list-charges",
      chargesData,
    );
  }

  public cancelCharge(code: string) {
    return this.doRequest<CancelChargeResponse>("/cancel-charge", { code });
  }
}

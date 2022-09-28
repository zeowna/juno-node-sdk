import { BaseResource } from './BaseResource';
import { PaymentInput } from '../inputs';
import { PaymentPayResponse } from '../responses';

export class PaymentResource extends BaseResource {
  protected readonly baseUri = '/payments';

  pay(payment: PaymentInput) {
    return this.httpPost<PaymentPayResponse>('/', payment);
  }
}

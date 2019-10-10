import axios from 'axios';
import { JunoSDKConfig } from '../configs';
import { JUNO_API_BASE_URL, SANDBOX_JUNO_API_BASE_URL } from '../consts';
import { JunoEnvironmentError } from '../errors';
import {
  BalanceResourceV1, ChargeResourceV1, PayeeResourceV1, TransferResourceV1,
} from '../resources-v1';

export class JunoV1 {
  private readonly _balanceResource: BalanceResourceV1;

  private readonly _chargeResource: ChargeResourceV1;

  private readonly _transferResource: TransferResourceV1;

  private readonly _payee: PayeeResourceV1;

  constructor(config: JunoSDKConfig = {}, environment: string, token: string) {
    const junoClient = axios.create({
      baseURL: JunoV1.setEndpoint(config, environment),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    this._balanceResource = new BalanceResourceV1(junoClient, token);
    this._chargeResource = new ChargeResourceV1(junoClient, token);
    this._transferResource = new TransferResourceV1(junoClient, token);
    this._payee = new PayeeResourceV1(junoClient, token);
  }

  private static setEndpoint(config: JunoSDKConfig, env: string) {
    if (config.sandbox !== undefined) {
      if (config.sandbox || env === 'sandbox') {
        return SANDBOX_JUNO_API_BASE_URL;
      }
      return JUNO_API_BASE_URL;
    }

    switch (env) {
      case 'sandbox':
        return SANDBOX_JUNO_API_BASE_URL;
      case 'production':
        return JUNO_API_BASE_URL;
      default:
        throw new JunoEnvironmentError('Invalid JUNO_ENV.');
    }
  }

  /**
   * BalanceV1 resources-v1
   */
  get balance() {
    return this._balanceResource;
  }

  /**
   * ChargeV1 resources-v1
   */
  get charge() {
    return this._chargeResource;
  }

  /**
   * TransferV2 resources-v1
   */
  get transfer() {
    return this._transferResource;
  }

  /**
   * Payee resources-v1
   */
  get payee() {
    return this._payee;
  }
}

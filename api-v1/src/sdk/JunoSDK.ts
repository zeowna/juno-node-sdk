import axios from 'axios';
import { format as formatStr } from 'util';
import { JunoEnvironments, JunoSDKConfig } from '../configs';
import {
  JUNO_API_BASE_URL, JUNO_ENV, JUNO_TOKEN, SANDBOX_JUNO_API_BASE_URL,
} from '../consts';
import { JunoEnvironmentError } from '../errors';
import {
  BalancesResource, ChargesResource, PayeesResource, TransfersResource,
} from '../resources';

export class JunoSDK {
  private readonly _balanceResource: BalancesResource;

  private readonly _chargeResource: ChargesResource;

  private readonly _transferResource: TransfersResource;

  private readonly _payees: PayeesResource;

  constructor(config?: JunoSDKConfig) {
    const configWithEnv: JunoSDKConfig = {
      token: JUNO_TOKEN,
      environment: JUNO_ENV,
      ...config,
    };

    JunoSDK.validateEnvironment(configWithEnv);

    const { environment, token } = configWithEnv;

    const junoClient = axios.create({
      baseURL: JunoSDK.setEndpoint(environment),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    this._balanceResource = new BalancesResource(junoClient, token);
    this._chargeResource = new ChargesResource(junoClient, token);
    this._transferResource = new TransfersResource(junoClient, token);
    this._payees = new PayeesResource(junoClient, token);
  }

  private static setEndpoint(environment: JunoEnvironments) {
    switch (environment) {
      case JunoEnvironments.Sandbox:
        return SANDBOX_JUNO_API_BASE_URL;
      case JunoEnvironments.Production:
        return JUNO_API_BASE_URL;
      default:
        throw new JunoEnvironmentError('Invalid JUNO_ENV.');
    }
  }

  private static validateEnvironment({ token, environment }: JunoSDKConfig) {
    if (!token || typeof token !== 'string') {
      throw new JunoEnvironmentError(`JUNO_TOKEN environment variable is invalid (${token}).`);
    }

    const values = Object.values(JunoEnvironments);

    if (!environment || !values.includes(environment)) {
      const message = 'JUNO_ENV environment variable is invalid (%s), it must be either (%s).';
      throw new JunoEnvironmentError(formatStr(message, environment, values.join('|')));
    }
  }

  /**
   * Balance resources
   */
  get balances() {
    return this._balanceResource;
  }

  /**
   * ChargeV1 resources
   */
  get charges() {
    return this._chargeResource;
  }

  /**
   * Transfer resources
   */
  get transfers() {
    return this._transferResource;
  }

  /**
   * Payee resources
   */
  get payees() {
    return this._payees;
  }
}

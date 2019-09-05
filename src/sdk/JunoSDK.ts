import axios from "axios";
import { JunoSDKConfig } from "../configs";
import { JUNO_API_BASE_URL, SANDBOX_JUNO_API_BASE_URL } from "../consts";
import { JunoEnvironmentError } from "../errors";
import { BalanceResource, ChargeResource, PayeeResource, TransferResource } from "../resources";

/**
 * Juno SDK Class
 */
export class JunoSDK {
  private readonly _balanceResource: BalanceResource;
  private readonly _chargeResource: ChargeResource;
  private readonly _transferResource: TransferResource;
  private readonly _payee: PayeeResource;

  constructor(config: JunoSDKConfig = {}) {
    const { JUNO_ENV, JUNO_TOKEN } = process.env;
    this.validateEnvironment(JUNO_TOKEN);

    const token = JUNO_TOKEN;
    const junoClient = axios.create({
      baseURL: this.setEndpoint(config, JUNO_ENV),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    this._balanceResource = new BalanceResource(junoClient, token);
    this._chargeResource = new ChargeResource(junoClient, token);
    this._transferResource = new TransferResource(junoClient, token);
    this._payee = new PayeeResource(junoClient, token);
  }

  private setEndpoint(config: JunoSDKConfig, env: string) {
    if (config.sandbox !== undefined) {
      if (config.sandbox || env === "sandbox") {
        return SANDBOX_JUNO_API_BASE_URL;
      }
      return JUNO_API_BASE_URL;
    }

    switch (env) {
      case "sandbox":
        return SANDBOX_JUNO_API_BASE_URL;
      case "production":
        return JUNO_API_BASE_URL;
      default:
        throw new JunoEnvironmentError("Invalid JUNO_ENV.");
    }
  }

  /**
   * Performs environment validation
   * @see https://www.boletobancario.com/boletofacil/integration/integration.html
   * @param baseUrl
   * @param token
   */
  private validateEnvironment(token: string) {
    if (!token) {
      throw new JunoEnvironmentError("JUNO_TOKEN environment variable is required.");
    }
  }

  /**
   * Balabce resources
   */
  get balance() {
    return this._balanceResource;
  }

  /**
   * Charge resources
   */
  get charge() {
    return this._chargeResource;
  }

  /**
   * Transfer resources
   */
  get transfer() {
    return this._transferResource;
  }

  /**
   * Payee resources
   */
  get payee() {
    return this._payee;
  }
}

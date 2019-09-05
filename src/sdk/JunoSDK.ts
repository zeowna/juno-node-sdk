import axios from "axios";
import { JunoSDKConfig } from "../configs";
import { JUNO_API_BASE_URL, SANDBOX_JUNO_API_BASE_URL } from "../consts";
import { JunoEnvironmentError } from "../errors";
import { BalanceResource, ChargeResource, TransferResource } from "../resources";

/**
 * Juno SDK Class
 */
export class JunoSDK {
  private readonly _balanceResource: BalanceResource;
  private readonly _chargeResource: ChargeResource;
  private readonly _transferResource: TransferResource;

  constructor(config: JunoSDKConfig) {
    const { JUNO_TOKEN } = process.env;
    this.validateEnvironment(JUNO_TOKEN);

    const token = JUNO_TOKEN;
    const junoClient = axios.create({
      baseURL: config.sandbox ? SANDBOX_JUNO_API_BASE_URL : JUNO_API_BASE_URL,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    this._balanceResource = new BalanceResource(junoClient, token);
    this._chargeResource = new ChargeResource(junoClient, token);
    this._transferResource = new TransferResource(junoClient, token);
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
   * Transfert resources
   */
  get transfer() {
    return this._transferResource;
  }
}

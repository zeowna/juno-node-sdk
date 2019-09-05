import axios from "axios";
import { BalanceResource } from "./BalanceResource";
import { ChargeResource } from "./ChargeResource";
import { TransferResource } from "./TransferResource";

/**
 * Juno SDK Class
 */
export class JunoSDK {
  private readonly _balanceResource: BalanceResource;
  private readonly _chargeResource: ChargeResource;
  private readonly _transferResource: TransferResource;

  constructor() {
    const { JUNO_TOKEN, JUNO_API_BASE_URL } = process.env;
    this.validateEnvironment(JUNO_API_BASE_URL, JUNO_TOKEN);

    const token = JUNO_TOKEN;
    const junoClient = axios.create({
      baseURL: JUNO_API_BASE_URL,
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
  private validateEnvironment(baseUrl: string, token: string) {
    if (!baseUrl || token) {
      throw new Error("JUNO_API_BASE_URL and JUNO_TOKEN environment variables are required.");
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

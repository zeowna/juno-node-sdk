import { JunoSDKConfig } from '../configs';
import { JunoEnvironmentError } from '../errors';
import { JunoV1 } from './JunoV1';
import { JunoV2 } from './JunoV2';

/**
 * Juno SDK Class
 */
export class JunoSDK {
  private _v1: JunoV1;

  private _v2: JunoV2;

  constructor(config: JunoSDKConfig = {}) {
    const { JUNO_ENV, JUNO_TOKEN } = process.env;

    JunoSDK.validateEnvironment(JUNO_TOKEN);
    this._v1 = new JunoV1(config, JUNO_ENV, JUNO_TOKEN);
    this._v2 = new JunoV2(config, JUNO_ENV, JUNO_TOKEN);
  }

  /**
   * Performs environment validation
   * @see https://www.boletobancario.com/boletofacil/integration/integration.html
   * @param token
   */
  private static validateEnvironment(token: string) {
    if (!token) {
      throw new JunoEnvironmentError('JUNO_TOKEN environment variable is required.');
    }
  }

  get v1() {
    return this._v1;
  }

  get v2() {
    return this._v2;
  }
}

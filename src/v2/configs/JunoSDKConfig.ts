import { JunoEnvironments } from './JunoEnvironments';

/**
 * Juno SDK V2 Configuration Object
 */
export interface JunoSDKConfig {
  /**
   * Juno integration token
   * @example used at X-Resource-Token header
   */
  token: string;

  /**
   * Juno ClientId
   */
  clientId: string;

  /**
   * Juno Secret
   */
  secret: string;

  /**
   * Enable requests to Sandbox
   */
  environment: JunoEnvironments;
}

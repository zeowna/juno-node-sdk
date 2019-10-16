import { JunoEnvironments } from './JunoEnvironments';

/**
 * Juno SDK Configuration Object
 */
export interface JunoSDKConfig {
  /**
   * Juno integration token
   */
  token: string;
  /**
   * Enable requests to Sandbox
   */
  environment: JunoEnvironments;
}

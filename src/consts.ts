import { JunoEnvironments } from './v1/configs';

const SANDBOX_JUNO_URL = 'https://sandbox.boletobancario.com';
const JUNO_URL = 'https://boletobancario.com';

export const SANDBOX_JUNO_API_BASE_URL_V1 = `${SANDBOX_JUNO_URL}/boletofacil/integration/api/v1/`;
export const JUNO_API_BASE_URL_V1 = 'https://www.boletobancario.com/boletofacil/integration/api/v1';

export const SANDBOX_JUNO_API_BASE_URL_v2 = `${SANDBOX_JUNO_URL}/api-integration`;
export const JUNO_API_BASE_URL_v2 = 'https://boletobancario.com/api-integration';

export const SANDBOX_JUNO_API_AUTH_URL = `${SANDBOX_JUNO_URL}/authorization-server`;
export const JUNO_API_AUTH_URL = `${JUNO_URL}/authorization-server`;

export const {
  JUNO_TOKEN,
  JUNO_CLIENT_ID,
  JUNO_SECRET,
} = process.env;

export const JUNO_ENV: JunoEnvironments = process.env.JUNO_ENV as any;

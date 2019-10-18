import { JunoEnvironments } from './configs';

const SANDBOX_JUNO_URL = 'https://sandbox.boletobancario.com';
const PRODUCTION_JUNO_URL = 'https://api.juno.com.br';

const SANDBOX_JUNO_API_BASE_URL = `${SANDBOX_JUNO_URL}/api-integration`;
const PRODUCTION_JUNO_API_BASE_URL = PRODUCTION_JUNO_URL;

const SANDBOX_JUNO_API_AUTH_URL = `${SANDBOX_JUNO_URL}/authorization-server`;
const PRODUCTION_JUNO_API_AUTH_URL = `${PRODUCTION_JUNO_URL}/authorization-server`;

export const JUNO_API_BASE_URLS = {
  [JunoEnvironments.Sandbox]: SANDBOX_JUNO_API_BASE_URL,
  [JunoEnvironments.Production]: PRODUCTION_JUNO_API_BASE_URL,
};

export const JUNO_API_AUTH_URLS = {
  [JunoEnvironments.Sandbox]: SANDBOX_JUNO_API_AUTH_URL,
  [JunoEnvironments.Production]: PRODUCTION_JUNO_API_AUTH_URL,
};

export const {
  JUNO_TOKEN,
  JUNO_CLIENT_ID,
  JUNO_SECRET,
} = process.env;

export const JUNO_ENV = process.env.JUNO_ENV as JunoEnvironments;

# Juno Node SDK

## Initialization
The initialization can be performed either by ENVIRONMENT variables or by JunoSDK constructor.


### Environment variables
You must set following environment variables:

```bash
# V2 API only
export JUNO_CLIENT_ID=YOUR_CLIENT_ID
export JUNO_SECRET=YOUR_SECRET
export JUNO_TOKEN=YOUR_TOKEN
export JUNO_ENV=sandbox|production
```

### JunoSDK constructor

```typescript
export { JunoSDK, JunoEnvironments } from 'juno-node-sdk-v2';

const juno = new JunoSDK({
  token: 'YOUR_TOKEN',
  clientId: 'YOUR_CLIENT_ID',
  secret: 'YOUR_SECRET'
  environment: JunoEnvironments.Sandbox
});
```

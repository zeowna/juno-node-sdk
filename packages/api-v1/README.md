# Juno Node SDK

## Initialization
The initialization can be performed either by ENVIRONMENT variables or by JunoSDK constructor.


### Environment variables
You must set following environment variables:

```bash
# V1
export JUNO_TOKEN=YOUR_TOKEN
export JUNO_ENV=sandbox|production
```

### JunoSDK constructor

```typescript
/*
* For V1
*/
export { JunoSDK, JunoEnvironments } from 'juno-node-sdk-v1';

const juno = new JunoSDK({
  token: 'YOUR_TOKEN',
  environment: JunoEnvironments.Sandbox
});
```

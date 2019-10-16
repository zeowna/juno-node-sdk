# Juno Node SDK

## Initialization
The initialization can be performed either by ENVIRONMENT variables or by JunoSDK constructor.


### Environment variables
You must set following environment variables:

```bash
# V2 API only
export JUNO_CLIENT_ID=YOUR_CLIENT_ID
export JUNO_SECRET=YOUR_SECRET

# V1 and V2
export JUNO_TOKEN=YOUR_TOKEN
export JUNO_ENV=sandbox|production
```

### JunoSDK constructor

```typescript
/*
* For V1
*/
export { JunoSDK, JunoEnvironments } from 'juno-node-sdk';

const juno = new JunoSDK({
  token: 'YOUR_TOKEN',
  environment: JunoEnvironments.Sandbox
});

/*
* For V2
*/
export { V2 } from 'juno-node-sdk';

const { JunoSDK, JunoEnvironments } = V2;

const juno = new JunoSDK({
  token: 'YOUR_TOKEN',
  clientId: 'YOUR_CLIENT_ID',
  secret: 'YOUR_SECRET'
  environment: JunoEnvironments.Sandbox
})
```

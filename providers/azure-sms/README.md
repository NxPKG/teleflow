# Novu AzureSms Provider

A AzureSms sms provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { AzureSmsProvider } from '@novu/azure-sms';

const provider = new AzureSmsProvider({
  connectionString: process.env.AZURE_CONNECTION_STRING,
});
```

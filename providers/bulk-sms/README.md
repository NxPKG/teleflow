# Novu BulkSms Provider

A BulkSms sms provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { BulkSmsProvider } from '@novu/bulk-sms';

const provider = new BulkSmsProvider({
    apiToken = process.env.BULKSMS_API_TOKEN,
});
```

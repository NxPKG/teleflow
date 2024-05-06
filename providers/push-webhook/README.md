# Novu PushWebhook Provider

This is a library that triggers a custom webhook and shows itself as a push library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { PushWebhookPushProvider } from '@novu/push-webhook';

const provider = new PushWebhookPushProvider({
  webhookUrl: credentials.webhookUrl,
  hmacSecretKey: credentials.secretKey,
});
```

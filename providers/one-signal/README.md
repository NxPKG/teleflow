# Novu OneSignal Provider

A OneSignal push provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { OneSignalPushProvider } from '@novu/one-signal';

const provider = new OneSignalPushProvider({
  appId: process.env.ONE_SIGNAL_APP_ID,
  apiKey: process.env.ONE_SIGNAL_API_KEY,
});
```

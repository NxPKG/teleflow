# Novu Bandwidth Provider

A Bandwidth sms provider library for [@teleflow/node](https://github.com/novuhq/novu)

## Usage

```javascript
import { BandwidthSmsProvider } from '@novu/bandwidth';

const provider = new TwilioSmsProvider({
  username: process.env.BANDWIDTH_USERNAME,
  password: process.env.BANDWIDTH_PASSWORD,
  accountId: process.env.BANDWIDTH_ACCOUNT_ID,
});
```

# Novu Eazy SMS Provider

A EazySms sms provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { EazySmsProvider } from '@novu/eazy-sms';

const provider = new EazySmsProvider({
  apiKey: process.env.API_KEY,
  channelId: process.env.CHANNEL_ID,
});
```

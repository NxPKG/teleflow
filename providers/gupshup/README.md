# Novu Gupshup Provider

A Gupshup sms provider library for [@teleflow/node](https://github.com/novuhq/novu)

## Usage

```javascript
import { GupshupSmsProvider } from '@novu/gupshup';

const provider = new GupshupSmsProvider({
  userId: process.env.GUPSHUP_USER_ID,
  password: process.env.GUPSHUP_PASSWORD,
});
```

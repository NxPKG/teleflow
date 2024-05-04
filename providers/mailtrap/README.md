# Novu Mailtrap Provider

A Mailtrap email provider library for [@teleflow/node](https://github.com/novuhq/novu)

## Usage

```javascript
import { MailtrapEmailProvider } from '@novu/mailtrap';

const provider = new MailtrapEmailProvider({
  apiKey: process.env.MAILTRAP_API_KEY,
});
```

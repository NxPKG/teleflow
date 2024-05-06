# Novu WhatsappBusiness Provider

A WhatsappBusiness chat provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { WhatsAppBusinessProvider } from '@novu/whatsapp-business';

const provider = new WhatsappBusinessChatProvider({
  accessToken: process.env.API_TOKEN,
  phoneNumberIdentification: process.env.PHONE_NUMBER_IDENTIFICATION,
});
```

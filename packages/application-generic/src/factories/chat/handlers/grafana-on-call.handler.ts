import { ICredentials } from '@novu/shared';
import { ChannelTypeEnum } from '@teleflow/stateless';
import { GrafanaOnCallChatProvider } from '@novu/grafana-on-call';

import { BaseChatHandler } from './base.handler';

export class GrafanaOnCallHandler extends BaseChatHandler {
  constructor() {
    super('grafana-on-call', ChannelTypeEnum.CHAT);
  }

  buildProvider(credentials: ICredentials) {
    this.provider = new GrafanaOnCallChatProvider(credentials);
  }
}

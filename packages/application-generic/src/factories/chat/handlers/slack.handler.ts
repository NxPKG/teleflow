import { ICredentials } from '@novu/shared';
import { ChannelTypeEnum } from '@teleflow/stateless';
import { SlackProvider } from '@novu/slack';

import { BaseChatHandler } from './base.handler';

export class SlackHandler extends BaseChatHandler {
  constructor() {
    super('slack', ChannelTypeEnum.CHAT);
  }

  buildProvider(_: ICredentials) {
    this.provider = new SlackProvider();
  }
}

import { ICredentials } from '@novu/shared';
import { ChannelTypeEnum } from '@teleflow/stateless';
import { BaseChatHandler } from './base.handler';
import { DiscordProvider } from '@novu/discord';

export class DiscordHandler extends BaseChatHandler {
  constructor() {
    super('discord', ChannelTypeEnum.CHAT);
  }

  buildProvider(_credentials: ICredentials) {
    this.provider = new DiscordProvider({});
  }
}

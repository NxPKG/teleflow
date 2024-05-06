import { IPushOptions, ISendMessageSuccessResponse } from '@teleflow/stateless';
import { ChannelTypeEnum, ICredentials } from '@novu/shared';

export interface IPushHandler {
  canHandle(providerId: string, channelType: ChannelTypeEnum);

  buildProvider(credentials: ICredentials);

  send(smsOptions: IPushOptions): Promise<ISendMessageSuccessResponse>;
}

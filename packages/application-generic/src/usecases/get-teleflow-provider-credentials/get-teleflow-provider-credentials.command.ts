import { IsEnum, IsString } from 'class-validator';
import { ChannelTypeEnum } from '@novu/shared';

import { EnvironmentWithUserCommand } from '../../commands/project.command';

export class GetTeleflowProviderCredentialsCommand extends EnvironmentWithUserCommand {
  @IsEnum(ChannelTypeEnum)
  channelType: ChannelTypeEnum;

  @IsString()
  providerId: string;
}

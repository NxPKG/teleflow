import { ChannelTypeEnum } from '@novu/shared';
import { TeleflowProviderBase } from './TeleflowProviderBase';

export function TeleflowSmsProviderModal({ onClose }: { onClose: () => void }) {
  return <TeleflowProviderBase onClose={onClose} channel={ChannelTypeEnum.SMS} />;
}

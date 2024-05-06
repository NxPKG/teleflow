import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  EmailProviderIdEnum,
  ICredentials,
  SmsProviderIdEnum,
} from '@novu/shared';
import { AnalyticsService } from '../../services/analytics.service';
import { CalculateLimitTeleflowIntegration } from '../calculate-limit-teleflow-integration';

import { GetTeleflowProviderCredentialsCommand } from './get-teleflow-provider-credentials.command';

@Injectable()
export class GetTeleflowProviderCredentials {
  constructor(
    private analyticsService: AnalyticsService,
    protected calculateLimitTeleflowIntegration: CalculateLimitTeleflowIntegration
  ) {}

  async execute(
    integration: GetTeleflowProviderCredentialsCommand
  ): Promise<ICredentials> {
    if (
      integration.providerId === EmailProviderIdEnum.Novu ||
      integration.providerId === SmsProviderIdEnum.Novu
    ) {
      const limit = await this.calculateLimitTeleflowIntegration.execute({
        channelType: integration.channelType,
        environmentId: integration.environmentId,
        organizationId: integration.organizationId,
      });

      if (!limit) {
        throw new ConflictException(
          `Limit for Novu's ${integration.channelType.toLowerCase()} provider does not exists.`
        );
      }

      if (limit.count >= limit.limit) {
        this.analyticsService.track(
          '[Novu Integration] - Limit reached',
          integration.userId,
          {
            channelType: integration.channelType,
            environmentId: integration.environmentId,
            organizationId: integration.organizationId,
            providerId: integration.providerId,
            ...limit,
          }
        );
        throw new ConflictException(
          `Limit for Novu's ${integration.channelType.toLowerCase()} provider was reached.`
        );
      }
    }

    if (integration.providerId === EmailProviderIdEnum.Novu) {
      return {
        apiKey: process.env.NOVU_EMAIL_INTEGRATION_API_KEY,
        from: 'no-reply@novu.co',
        senderName: 'Novu',
        ipPoolName: 'Demo',
      };
    }

    if (integration.providerId === SmsProviderIdEnum.Novu) {
      return {
        accountSid: process.env.NOVU_SMS_INTEGRATION_ACCOUNT_SID,
        token: process.env.NOVU_SMS_INTEGRATION_TOKEN,
        from: process.env.NOVU_SMS_INTEGRATION_SENDER,
      };
    }

    throw new NotFoundException(
      `Credentials for Novu's ${integration.channelType.toLowerCase()} provider could not be found`
    );
  }
}

import { Provider } from '@nestjs/common';
import { NovuStateless } from '@teleflow/stateless';
import { TELEFLOW_OPTIONS } from '../helpers/constants';
import {
  ITeleflowModuleAsyncOptions,
  ITeleflowOptions,
  ITeleflowOptionsFactory,
} from '../interfaces';
import { TeleflowService } from '../services';

async function novuServiceFactory(options: ITeleflowOptions) {
  const novu = new NovuStateless();
  if (options.providers) {
    for (const provider of options.providers) {
      await novu.registerProvider(provider);
    }
  }

  if (options.templates) {
    for (const template of options.templates) {
      await novu.registerTemplate(template);
    }
  }

  return novu;
}

export function createTeleflowProviders(options: ITeleflowOptions): Provider[] {
  return [
    {
      provide: TeleflowService,
      useFactory: novuServiceFactory,
      inject: [TELEFLOW_OPTIONS],
    },
    {
      provide: TELEFLOW_OPTIONS,
      useValue: options,
    },
  ];
}

export function createAsyncTeleflowProviders(
  options: ITeleflowModuleAsyncOptions
): Provider[] {
  if (options.useFactory) {
    return [
      {
        provide: TeleflowService,
        useFactory: novuServiceFactory,
        inject: [TELEFLOW_OPTIONS],
      },
      {
        provide: TELEFLOW_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      },
    ];
  }

  return [
    {
      provide: TeleflowService,
      useFactory: novuServiceFactory,
      inject: [TELEFLOW_OPTIONS],
    },
    {
      provide: TELEFLOW_OPTIONS,
      useFactory: (instance: ITeleflowOptionsFactory) =>
        instance.createNovuOptions(),
      inject: [options.useExisting || options.useClass],
    },
  ];
}

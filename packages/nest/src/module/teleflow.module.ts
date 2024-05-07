import { DynamicModule, Global, Module } from '@nestjs/common';
import { ITeleflowModuleAsyncOptions, ITeleflowOptions } from '../interfaces';
import {
  createAsyncTeleflowProviders,
  createTeleflowProviders,
} from '../providers';

@Global()
@Module({})
export class NovuModule {
  public static forRoot(options: ITeleflowOptions): DynamicModule {
    const providers = createTeleflowProviders(options);

    return {
      module: NovuModule,
      providers,
      exports: providers,
    };
  }

  public static forRootAsync(
    options: ITeleflowModuleAsyncOptions,
  ): DynamicModule {
    const providers = createAsyncTeleflowProviders(options);

    return {
      module: NovuModule,
      providers: [],
      exports: providers,
      imports: options.imports || [],
    };
  }
}

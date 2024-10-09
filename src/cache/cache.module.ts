import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { redisStore } from 'cache-manager-redis-yet';
import { RedisClientOptions } from 'redis';
import { CacheController } from './cache.controller';
import { CacheService } from './cache.service';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    CacheModule.registerAsync<RedisClientOptions>({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        socket: {
          host: configService.get<string>('REDIS_HOST') ?? 'localhost',
          port: parseInt(configService.get<string>('REDIS_PORT') ?? '6379'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [CacheController],
  providers: [CacheService],
  exports: [CacheService],
})
export class AppCacheModule {}

import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { CacheInMemoryAppService } from './cache-memory-app.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: Number(process.env.CACHE_MEMORY_TTL_MS),
    }),
  ],
  providers: [CacheInMemoryAppService],
  exports: [CacheInMemoryAppService],
})
export class CacheInMemoryAppModule {}

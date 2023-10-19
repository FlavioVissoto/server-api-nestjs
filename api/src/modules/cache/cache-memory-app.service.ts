import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheInMemoryAppService<T> {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCache(key: string): Promise<T> {
    return this.cacheManager.get(key);
  }

  async setCache(key: string, value: T): Promise<void> {
    return this.cacheManager.set(key, value);
  }

  async delCache(key: string): Promise<void> {
    return this.cacheManager.del(key);
  }
}

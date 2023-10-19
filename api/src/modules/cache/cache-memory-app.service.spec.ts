import { Test, TestingModule } from '@nestjs/testing';

import { CacheInMemoryAppService } from './cache-memory-app.service';

describe('CacheService', () => {
  let service: CacheInMemoryAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CacheInMemoryAppService],
    }).compile();

    service = module.get<CacheInMemoryAppService>(CacheInMemoryAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

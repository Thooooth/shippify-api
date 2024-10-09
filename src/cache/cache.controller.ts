import { Controller, Get, Post } from '@nestjs/common';
import { CacheService } from './cache.service';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('cache')
export class CacheController {
  constructor(private readonly cacheService: CacheService) {}
  @ApiExcludeEndpoint()
  @Get()
  async find() {

   return 'true'
  }
  @ApiExcludeEndpoint()
  @Post()
  async store() {

    return 'true'
  }
}

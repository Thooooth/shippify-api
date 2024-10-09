import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CacheService } from '../cache/cache.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private redisCache: CacheService,
  ) {}

  async signIn(userName: string): Promise<any> {
    const user = await this.userService.findOne(userName);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { userName: user.username };
    const token = {
      access_token: await this.jwtService.signAsync(payload),
    };
    await this.redisCache.storeData(token.access_token);
    return token;
  }
}

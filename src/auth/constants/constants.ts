import { SetMetadata } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'default_secret',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

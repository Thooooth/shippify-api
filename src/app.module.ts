import { Module } from '@nestjs/common';
import { ProtectedController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { ConfigModule } from '@nestjs/config';
import { DriverModule } from './driver/driver.module';
import { CompanyModule } from './company/company.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Driver } from './driver/entities/driver.entity';
import { Company } from './company/entities/company.entity';
import { Vehicle } from './vehicle/entities/vehicle.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { AppCacheModule } from './cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT), 
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Driver, Company, Vehicle],
      synchronize: false, 
    }),
    DriverModule,
    CompanyModule,
    VehicleModule,
    AuthModule,
    UsersModule,
    AppCacheModule,
  ],
  controllers: [ProtectedController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountController, AuthController, HealtController } from './controllers/v1';
import DatabaseModule from './database';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [HealtController, AuthController, AccountController],
  providers: [],
})
export class AppModule {}

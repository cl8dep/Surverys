import { Module } from '@nestjs/common';
import { AccountController, AuthController, HealtController } from './controllers/v1';
import DatabaseModule from './database';

@Module({
  imports: [DatabaseModule],
  controllers: [HealtController, AuthController, AccountController],
  providers: [],
})
export class AppModule {}

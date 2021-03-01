import { Module } from '@nestjs/common';
import { AccountController, AuthController } from './controllers/v1';
import DatabaseModule from './database';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController, AccountController],
  providers: [],
})
export class AppModule {}

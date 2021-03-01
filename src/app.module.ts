import { Module } from '@nestjs/common';
import AppController from './controllers/v1';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

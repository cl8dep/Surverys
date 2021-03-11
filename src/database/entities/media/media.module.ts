import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { MediaProvider } from './media.provider';
import { MediaService } from './media.service';

@Module({
  imports: [DatabaseModule],
  providers: [...MediaProvider, MediaService],
  exports: [MediaService],
})
export class MediaModule {}

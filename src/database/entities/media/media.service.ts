import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Media from './media.entity';
import { REPOSITORY_NAME } from './media.provider';

@Injectable()
export class MediaService {
  constructor(
    @Inject(REPOSITORY_NAME) private accountRepository: Repository<Media>,
  ) {}

  async create(args: any) {
    return `This action create an account`;
  }

  findAll() {
    return `This action returns all account`;
  }

  async findOne(email: string) {
    return `This action returns an account`;
  }

  update(id: number, args: any) {
    return `This action updates an account`;
  }

  async remove(id: string) {
    return `This action remove an account`;
  }

  async save(entity: Media): Promise<Media> {
    return await this.accountRepository.save(entity);
  }
}

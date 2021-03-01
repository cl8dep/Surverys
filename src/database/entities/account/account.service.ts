import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Account from './account.entity';
import { REPOSITORY_NAME } from './account.provider';

@Injectable()
export class AccountService {
  constructor(@Inject(REPOSITORY_NAME) private accountRepository: Repository<Account>) {}

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

  async save(entity: Account): Promise<Account> {
    return await this.accountRepository.save(entity);
  }
}

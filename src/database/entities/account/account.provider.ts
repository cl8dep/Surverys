import { DEFAULT_DATABASE_PROVIDER_NAME } from 'src/database';
import { Connection } from 'typeorm';
import Account from './account.entity';

export const REPOSITORY_NAME = 'ACCOUNTS_REPOSITORY';

export const AccountProvider = [
  {
    provide: REPOSITORY_NAME,
    useFactory: (connection: Connection) => connection.getRepository(Account),
    inject: [DEFAULT_DATABASE_PROVIDER_NAME],
  },
];

import { createConnection, getConnection, getConnectionOptions } from 'typeorm';

export const DEFAULT_DATABASE_PROVIDER_NAME = 'DATABASE_CONNECTION';

export const databaseProviders = [
  {
    provide: DEFAULT_DATABASE_PROVIDER_NAME,
    useFactory: async () => await getConnectionOptions()
  }
];

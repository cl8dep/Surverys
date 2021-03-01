import { getConnectionOptions } from 'typeorm';

export const DEFAULT_DATABASE_PROVIDER_NAME = 'DATABASE_CONNECTION';

export const databaseProviders = [
  {
    provide: DEFAULT_DATABASE_PROVIDER_NAME,
    useFactory: async () => {
      let connectionOptions;
      if (process.env.NODE_ENV === "production")
        connectionOptions = await getConnectionOptions("heroku-postgres");
      else
        connectionOptions = await getConnectionOptions();
      //return await createConnection({
      //   ...connectionOptions,
      //  entities: [__dirname + '/entities/**/*.entity{.ts,.js}']
      //});
      return connectionOptions;
    }
  },
];

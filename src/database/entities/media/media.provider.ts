import { DEFAULT_DATABASE_PROVIDER_NAME } from '../../';
import { Connection } from 'typeorm';
import Media from './media.entity';

export const REPOSITORY_NAME = 'MEDIA_REPOSITORY';

export const MediaProvider = [
  {
    provide: REPOSITORY_NAME,
    useFactory: (connection: Connection) => connection.getRepository(Media),
    inject: [DEFAULT_DATABASE_PROVIDER_NAME],
  },
];

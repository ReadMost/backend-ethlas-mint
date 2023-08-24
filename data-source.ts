import * as path from 'path';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from './utils/config';
import { Receipt } from './entity/receipt';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false, // do not set to true, entities must be controlled only by migrations
  logging: false,
  entities: [Receipt],
  // migrations: [path.resolve(__dirname, 'migration/**')],
});

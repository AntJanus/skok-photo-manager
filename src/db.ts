import * as knex from 'knex';
import * as config from '../knexfile';

const env = process.env.NODE_ENV || 'development';

export const db = knex(config[env]);

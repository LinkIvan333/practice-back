import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  // url: process.env.DATABASE_URL,
  host: '0.0.0.0',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: ['dist/entities/*.js'],
  migrations: ['dist/migrations/*.js'],
});

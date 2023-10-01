import { PoolOptions } from 'mysql2';

type DataBaseConfig = PoolOptions & {
  // can be expand...
}

type ServerConfig = {
  port: string;
}

export const config: ServerConfig = {
  port: process.env.PORT || '8080',
};

export const dbConfig: DataBaseConfig = {
  host: 'localhost',
  user: 'admin',
  password: '1234',
  database: 'flattpod',
  connectionLimit: 10,
  port: 3306,
};

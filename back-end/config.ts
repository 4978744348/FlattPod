import { PoolOptions } from 'mysql2';

type DataBaseConfig = PoolOptions & {
  // can be expand...
}

type ServerConfig = {
  port: number;
}

export const config: ServerConfig = {
  port: process.env.FLATTPOD_SERVER_PORT ? Number.parseInt(process.env.FLATTPOD_SERVER_PORT, 10) : 8080,
};

const getHost = () => {
  // eslint-disable-next-line no-extra-boolean-cast
  if (process.env.FLATTPOD_PROD === "true") {
    return process.env.FLATTPOD_MYSQL_PROD_HOST;
  } else {
    return process.env.FLATTPOD_MYSQL_NONPROD_HOST;
  }
};

export const dbConfig: DataBaseConfig = {
  host: getHost(),
  user: process.env.FLATTPOD_MYSQL_USER,
  password: process.env.FLATTPOD_MYSQL_PASSWORD,
  database: process.env.FLATTPOD_MYSQL_DB,
  connectionLimit: process.env.FLATTPOD_MYSQL_LIMIT ? Number.parseInt(process.env.FLATTPOD_MYSQL_LIMIT, 10) : 10,
  port:  process.env.FLATTPOD_MYSQL_PORT ? Number.parseInt(process.env.FLATTPOD_MYSQL_PORT, 10) : 3306,
};

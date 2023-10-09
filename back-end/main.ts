import './server-preload';

import express, { Express } from "express";
import { config } from "./config";
import { MySQLConnection } from "./src/db/connection";
import { RowDataPacket, Pool } from "mysql2";
import { RouterUserController } from "./src/controllers/userConroller";

export const app: Express = express();

const port: number = config.port;

app.use(express.json());
app.use('/api/users', RouterUserController);
// app.all('*', (req, res) => res.status(404)) not found

app.listen(port, () => {
  console.log(`server started on the ${port}`);
});

export const poolInstance: Pool = MySQLConnection.getInstance();
export type RowData = RowDataPacket;
export type MYSQLPool = Pool;

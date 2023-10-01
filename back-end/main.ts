import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();
import { config } from "./config";
import { MySQLConnection } from "./src/db/connection";
import { RowDataPacket, Pool } from "mysql2";
import { RouterUserController } from "./src/controllers/impl/userConrollerImpl";

export const app: Express = express();
const port: string = config.port;

app.use(express.json());
app.use('/api/users', RouterUserController);

app.listen(port, () => {
  console.log(`server started on the ${port}`);
});

export const poolInstance: Pool = MySQLConnection.getInstance();
export type RowData = RowDataPacket;
export type MYSQLPool = Pool;

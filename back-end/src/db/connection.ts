import mysql, { Pool } from 'mysql2';
import { dbConfig } from '../../config';

export class MySQLConnection {
  private static instance: Pool | null = null;

  private constructor() {}

  public static getInstance(): Pool {
    if(MySQLConnection.instance === null) {
      try {
        MySQLConnection.instance = mysql.createPool(dbConfig);
        console.log('MySQLConnection has been created successfuly');
      } catch (e) {
        console.error('MySQLConnection has not been created', e );
        throw e;
      }
    }
    if (MySQLConnection.instance === null) {
      throw new Error('MySQLConnection has not been created');
    }
    return MySQLConnection.instance;
  }
}
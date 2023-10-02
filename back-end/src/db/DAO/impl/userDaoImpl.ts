import { User } from "../../../../src/models/user";
import { UserDao } from "../../../../src/db/DAO/userDao";
import { poolInstance, RowData } from "../../../../main";
import { SQLQueryError } from "../../../../src/utils/errors/mysqlErrors";
import { GET_ALL_ERROR } from "../../../../src/utils/messages/db/userDaoImpl.messages";

export class UserDaoImpl implements UserDao {
  // private readonly ADD_USER: string = '';
  private readonly GET_ALL_USERS = "SELECT id, login, password FROM user";
  private readonly GET_USER_BY_ID = "SELECT id, login, PASSWORD FROM user WHERE id =";

  // add(user: User): void {
  //   throw new Error('Method not implemented.');
  // }
  getAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const users: User[] = [];
      poolInstance.query(this.GET_ALL_USERS, (error: SQLQueryError, results: RowData[]) => {
        if (error) {
          console.error({
            info: GET_ALL_ERROR,
            code: error.code,
            sqlMessage: error.message,
          });
          reject(Error(error.stack));
        } else {
          results.forEach((item) => users.push(item as User));
          resolve(users);
        }
      });
    });
  }

  getById(id: number): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const users: User[] = [];
      poolInstance.query(this.GET_USER_BY_ID + id, (error: SQLQueryError, results: RowData[]) => {
        if (error) {
          console.error({
            info: GET_ALL_ERROR,
            code: error.code,
            sqlMessage: error.message,
          });
          reject(Error(error.stack));
        } else {
          results.forEach((item) => users.push(item as User));
          resolve(users);
        }
      });
    });
  }
  // delete(id: number): boolean {
  //   throw new Error('Method not implemented.');
  // }
  // update(id: number): boolean {
  //   throw new Error('Method not implemented.');
  // }
}

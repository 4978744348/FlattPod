import { User } from "../../../../src/models/user";
import { UserDao } from "../../../../src/db/DAO/userDao";
import { poolInstance, RowData } from "../../../../main";
import { SQLQueryError } from "../../../../src/utils/errors/mysqlErrors";
import { GET_ALL_ERROR } from "../../../../src/utils/messages/db/userDaoImpl.messages";

export class UserDaoImpl implements UserDao {

  private readonly GET_ALL_USERS = "SELECT id, login, password FROM user";
  private readonly GET_USER_BY_ID = "SELECT id, login, PASSWORD FROM user WHERE id =";
  private readonly ADD_USER = "INSERT INTO user (login, password) VALUES (?, ?)";
  private readonly DLEETE_USER = "DELETE FROM user WHERE id=";
  private readonly UPDATE_USER = "UPDATE user SET login = ?, password = ? WHERE id =";

  add(user: User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      poolInstance.query(
        this.ADD_USER,
        [user.login, user.password],
        (error: SQLQueryError | null) => {
          if (error) {
            console.error({
              info: GET_ALL_ERROR, // TODO: need to change error info
              code: error.code,
              sqlMessage: error.message,
            });
            reject(error);
          } else {
            resolve(true);
          }
        }
      );
    });
  }

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

  delete(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      poolInstance.query(
        this.DLEETE_USER + id,
        (error: SQLQueryError | null) => {
          if (error) {
            console.error({
              info: GET_ALL_ERROR, // TODO: need to change error info
              code: error.code,
              sqlMessage: error.message,
            });
            reject(error);
          } else {
            resolve(true);
          }
        }
      );
    });
  }
  updateById(user: User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      poolInstance.query(
        this.UPDATE_USER + user.id,
        [user.login, user.password],
        (error: SQLQueryError | null) => {
          if (error) {
            console.error({
              info: GET_ALL_ERROR, // TODO: need to change error info
              code: error.code,
              sqlMessage: error.message,
            });
            reject(error);
          } else {
            resolve(true);
          }
        }
      );
    });
  }
}

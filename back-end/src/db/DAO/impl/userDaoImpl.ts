import { User } from "../../../../src/models/user";
import { UserDao } from "../../../../src/db/DAO/userDao";
import { poolInstance, RowData } from "../../../../main";
import { SQLQueryError } from "../../../../src/utils/errors/mysqlErrors";
import { GET_ADD_ERROR, GET_ALL_ERROR, DELETE_BY_ID_ERROR,
  GET_BY_ID_ERROR, UPDATE_BY_ID_ERROR } from "../../../../src/utils/messages/db/userDaoImpl.messages";

export class UserDaoImpl implements UserDao {

  private readonly GET_ALL_USERS = "SELECT user_id, email FROM user";
  private readonly GET_USER_BY_ID = "SELECT email FROM user WHERE user_id =";
  private readonly ADD_USER = "INSERT INTO user (user_id, email) VALUES (?, ?)";
  private readonly DLEETE_USER = "DELETE FROM user WHERE user_id=";
  private readonly UPDATE_USER = "UPDATE user SET email = ? WHERE user_id=";

  add(user: User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      poolInstance.query(
        this.ADD_USER,
        [user.id, user.email],
        (error: SQLQueryError | null) => {
          if (error) {
            console.error({
              info: GET_ADD_ERROR,
              code: error.code,
              query: error.sql ? error.sql : undefined,
              sqlMessage: error.message,
            });
            reject({
              info: GET_ADD_ERROR,
              code: error.code,
              query: error.sql ? error.sql : undefined,
              sqlMessage: error.message,
              stack: error.stack,
            });
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
            query: error.sql ? error.sql : undefined,
            sqlMessage: error.message,
            stack: error.stack,
          });
          reject({
            info: GET_ALL_ERROR,
            code: error.code,
            query: error.sql ? error.sql : undefined,
            sqlMessage: error.message,
            stack: error.stack,
          });
        } else {
          results.forEach((item) => users.push(item as User));
          resolve(users);
        }
      });
    });
  }

  getById(id: string): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const users: User[] = [];
      poolInstance.query(this.GET_USER_BY_ID + `"${id}"`, (error: SQLQueryError, results: RowData[]) => {
        if (error) {
          console.error({
            info: GET_BY_ID_ERROR,
            code: error.code,
            query: error.sql ? error.sql : undefined,
            sqlMessage: error.message,
          });
          reject({
            info: GET_BY_ID_ERROR,
            code: error.code,
            query: error.sql ? error.sql : undefined,
            sqlMessage: error.message,
            stack: error.stack,
          });
        } else {
          results.forEach((item) => users.push(item as User));
          resolve(users);
        }
      });
    });
  }

  deleteById(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      poolInstance.query(
        this.DLEETE_USER + `"${id}"`,
        (error: SQLQueryError | null) => {
          if (error) {
            console.error({
              info: DELETE_BY_ID_ERROR,
              code: error.code,
              query: error.sql ? error.sql : undefined,
              sqlMessage: error.message,
            });
            reject({
              info: DELETE_BY_ID_ERROR,
              code: error.code,
              query: error.sql ? error.sql : undefined,
              sqlMessage: error.message,
              stack: error.stack,
            });
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
        this.UPDATE_USER + `"${user.id}"`,
        [user.email],
        (error: SQLQueryError | null) => {
          if (error) {
            console.error({
              info: UPDATE_BY_ID_ERROR,
              code: error.code,
              query: error.sql ? error.sql : undefined,
              sqlMessage: error.message,
            });
            reject({
              info: UPDATE_BY_ID_ERROR,
              code: error.code,
              query: error.sql ? error.sql : undefined,
              sqlMessage: error.message,
              stack: error.stack,
            });
          } else {
            resolve(true);
          }
        }
      );
    });
  }
}

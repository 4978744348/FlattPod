"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDaoImpl = void 0;
const main_1 = require("../../../../main");
const userDaoImpl_messages_1 = require("../../../../src/utils/messages/db/userDaoImpl.messages");
class UserDaoImpl {
    constructor() {
        this.GET_ALL_USERS = "SELECT id, login, password FROM user";
        this.GET_USER_BY_ID = "SELECT id, login, PASSWORD FROM user WHERE id =";
        this.ADD_USER = "INSERT INTO user (login, password) VALUES (?, ?)";
        this.DLEETE_USER = "DELETE FROM user WHERE id=";
        this.UPDATE_USER = "UPDATE user SET login = ?, password = ? WHERE id =";
    }
    add(user) {
        return new Promise((resolve, reject) => {
            main_1.poolInstance.query(this.ADD_USER, [user.login, user.password], (error) => {
                if (error) {
                    console.error({
                        info: userDaoImpl_messages_1.GET_ADD_ERROR,
                        code: error.code,
                        query: error.sql ? error.sql : undefined,
                        sqlMessage: error.message,
                    });
                    reject({
                        info: userDaoImpl_messages_1.GET_ADD_ERROR,
                        code: error.code,
                        query: error.sql ? error.sql : undefined,
                        sqlMessage: error.message,
                        stack: error.stack,
                    });
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    getAll() {
        return new Promise((resolve, reject) => {
            const users = [];
            main_1.poolInstance.query(this.GET_ALL_USERS, (error, results) => {
                if (error) {
                    console.error({
                        info: userDaoImpl_messages_1.GET_ALL_ERROR,
                        code: error.code,
                        query: error.sql ? error.sql : undefined,
                        sqlMessage: error.message,
                        stack: error.stack,
                    });
                    reject({
                        info: userDaoImpl_messages_1.GET_ALL_ERROR,
                        code: error.code,
                        query: error.sql ? error.sql : undefined,
                        sqlMessage: error.message,
                        stack: error.stack,
                    });
                }
                else {
                    results.forEach((item) => users.push(item));
                    resolve(users);
                }
            });
        });
    }
    getById(id) {
        return new Promise((resolve, reject) => {
            const users = [];
            main_1.poolInstance.query(this.GET_USER_BY_ID + id, (error, results) => {
                if (error) {
                    console.error({
                        info: userDaoImpl_messages_1.GET_BY_ID_ERROR,
                        code: error.code,
                        query: error.sql ? error.sql : undefined,
                        sqlMessage: error.message,
                    });
                    reject({
                        info: userDaoImpl_messages_1.GET_BY_ID_ERROR,
                        code: error.code,
                        query: error.sql ? error.sql : undefined,
                        sqlMessage: error.message,
                        stack: error.stack,
                    });
                }
                else {
                    results.forEach((item) => users.push(item));
                    resolve(users);
                }
            });
        });
    }
    deleteById(id) {
        return new Promise((resolve, reject) => {
            main_1.poolInstance.query(this.DLEETE_USER + id, (error) => {
                if (error) {
                    console.error({
                        info: userDaoImpl_messages_1.DELETE_BY_ID_ERROR,
                        code: error.code,
                        query: error.sql ? error.sql : undefined,
                        sqlMessage: error.message,
                    });
                    reject({
                        info: userDaoImpl_messages_1.DELETE_BY_ID_ERROR,
                        code: error.code,
                        query: error.sql ? error.sql : undefined,
                        sqlMessage: error.message,
                        stack: error.stack,
                    });
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    updateById(user) {
        return new Promise((resolve, reject) => {
            main_1.poolInstance.query(this.UPDATE_USER + user.id, [user.login, user.password], (error) => {
                if (error) {
                    console.error({
                        info: userDaoImpl_messages_1.UPDATE_BY_ID_ERROR,
                        code: error.code,
                        query: error.sql ? error.sql : undefined,
                        sqlMessage: error.message,
                    });
                    reject({
                        info: userDaoImpl_messages_1.UPDATE_BY_ID_ERROR,
                        code: error.code,
                        query: error.sql ? error.sql : undefined,
                        sqlMessage: error.message,
                        stack: error.stack,
                    });
                }
                else {
                    resolve(true);
                }
            });
        });
    }
}
exports.UserDaoImpl = UserDaoImpl;
//# sourceMappingURL=userDaoImpl.js.map
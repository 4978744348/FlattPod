"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceImpl = void 0;
const userDaoImpl_1 = require("../../../src/db/DAO/impl/userDaoImpl");
class UserServiceImpl {
    constructor() {
        this.userDao = new userDaoImpl_1.UserDaoImpl();
    }
    async getAllUsers() {
        try {
            return await this.userDao.getAll();
        }
        catch (error) {
            if (error) {
                throw error;
            }
        }
        return null;
    }
    async getUserById(id) {
        try {
            return await this.userDao.getById(id);
        }
        catch (error) {
            if (error) {
                throw error;
            }
        }
        return null;
    }
    async createUser(user) {
        try {
            return await this.userDao.add(user);
        }
        catch (error) {
            if (error) {
                throw error;
            }
        }
        return null;
    }
    async deleteUser(id) {
        try {
            return await this.userDao.deleteById(id);
        }
        catch (error) {
            if (error) {
                throw error;
            }
        }
        return null;
    }
    async updateUserById(user) {
        try {
            return await this.userDao.updateById(user);
        }
        catch (error) {
            if (error) {
                throw error;
            }
        }
        return null;
    }
}
exports.UserServiceImpl = UserServiceImpl;
//# sourceMappingURL=userServiceImpl.js.map
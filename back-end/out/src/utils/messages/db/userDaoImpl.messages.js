"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_BY_ID_ERROR = exports.DELETE_BY_ID_ERROR = exports.GET_BY_ID_ERROR = exports.GET_ADD_ERROR = exports.GET_ALL_ERROR = void 0;
exports.GET_ALL_ERROR = {
    class: 'UserDaoImpl',
    method: 'getAll',
    message: 'cannot get all users'
};
exports.GET_ADD_ERROR = {
    class: 'UserDaoImpl',
    method: 'add',
    message: 'cannot create user'
};
exports.GET_BY_ID_ERROR = {
    class: 'UserDaoImpl',
    method: 'getById',
    message: 'cannot get user by id'
};
exports.DELETE_BY_ID_ERROR = {
    class: 'UserDaoImpl',
    method: 'deleteById',
    message: 'cannot delete user by id'
};
exports.UPDATE_BY_ID_ERROR = {
    class: 'UserDaoImpl',
    method: 'updateById',
    message: 'cannot update user by id'
};
//# sourceMappingURL=userDaoImpl.messages.js.map
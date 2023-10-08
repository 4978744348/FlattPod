"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(login, password) {
        this._login = login;
        this._password = password;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get login() {
        return this._login;
    }
    set login(login) {
        this._login = login;
    }
    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map
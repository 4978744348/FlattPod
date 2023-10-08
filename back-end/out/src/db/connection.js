"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLConnection = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = require("../../config");
class MySQLConnection {
    constructor() { }
    static getInstance() {
        if (MySQLConnection.instance === null) {
            try {
                MySQLConnection.instance = mysql2_1.default.createPool(config_1.dbConfig);
                console.log('MySQLConnection has been created successfuly');
            }
            catch (e) {
                console.error('MySQLConnection has not been created', e);
                throw e;
            }
        }
        if (MySQLConnection.instance === null) {
            throw new Error('MySQLConnection has not been created');
        }
        return MySQLConnection.instance;
    }
}
exports.MySQLConnection = MySQLConnection;
MySQLConnection.instance = null;
//# sourceMappingURL=connection.js.map
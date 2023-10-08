"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = exports.config = void 0;
exports.config = {
    port: process.env.PORT || '8080',
};
exports.dbConfig = {
    host: 'mysql-db',
    // host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'flattpod',
    connectionLimit: 10,
    port: 3306,
};
//# sourceMappingURL=config.js.map
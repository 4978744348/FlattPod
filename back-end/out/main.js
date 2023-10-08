"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.poolInstance = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = require("./config");
const connection_1 = require("./src/db/connection");
const userConroller_1 = require("./src/controllers/userConroller");
exports.app = (0, express_1.default)();
const port = config_1.config.port;
exports.app.use(express_1.default.json());
exports.app.use('/api/users', userConroller_1.RouterUserController);
exports.app.listen(port, () => {
    console.log(`server started on the ${port}`);
});
exports.poolInstance = connection_1.MySQLConnection.getInstance();
//# sourceMappingURL=main.js.map
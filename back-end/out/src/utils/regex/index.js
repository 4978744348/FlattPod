"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPostBody = exports.isValidUrlPath = void 0;
const isValidUrlPath = (value) => {
    return !/[^a-zA-Z0-9\\/]/.test(value);
};
exports.isValidUrlPath = isValidUrlPath;
const isValidPostBody = (...body) => {
    for (let i = 0; i < body.length; i++) {
        if (/[^a-zA-Z0-9]/.test(body[i])) {
            return false;
        }
    }
    return true;
};
exports.isValidPostBody = isValidPostBody;
//# sourceMappingURL=index.js.map
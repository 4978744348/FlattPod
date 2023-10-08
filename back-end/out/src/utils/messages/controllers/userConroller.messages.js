"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllerErorr = void 0;
const generalControllers_messages_1 = require("./generalControllers.messages");
var UserControllerErorr;
(function (UserControllerErorr) {
    UserControllerErorr["_500"] = "Internal Server Error";
    UserControllerErorr["_400_NOT_ALLOWED_TAGS"] = "The body requst has not allowed any tags. Allowed only character(upper/low case) and digital symbols";
    UserControllerErorr["_400_USER_WAS_NOT_CREATED"] = "The user was not created";
    UserControllerErorr["_400_USER_WAS_NOT_UPDATED"] = "The user was not updated";
    UserControllerErorr["_400_USER_WAS_NOT_DELETED"] = "The user was not deleted";
    UserControllerErorr["_400_WRONG_GET_ID"] = "wrong passing ID: /api/users/:id";
    UserControllerErorr["_400_WRONG_DELETE_ID"] = "wrong passing ID: /api/users/delete/:id";
    UserControllerErorr["_400_METHOD_NOT_ALLOWED"] = "Method Not Allowed";
})(UserControllerErorr || (exports.UserControllerErorr = UserControllerErorr = {}));
//# sourceMappingURL=userConroller.messages.js.map
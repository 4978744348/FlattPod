"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterUserController = exports.UserController = void 0;
const express_1 = require("express");
const services_1 = require("../services");
const types_1 = require("../types");
const regex_1 = require("../utils/regex");
const userConroller_messages_1 = require("../utils/messages/controllers/userConroller.messages");
class UserController {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', this.handleGetAllUsers);
        this.router.get('/:id', this.handleGetByIdUser);
        this.router.post('/create', this.handleAddUser);
        this.router.delete('/delete/:id', this.handleDeleteUser);
        this.router.put('/update/:id', this.handleUpdateUser);
    }
    async handleGetAllUsers(req, res) {
        try {
            res.setHeader('Content-Type', 'application/json');
            if (req.method !== 'GET') {
                res.status(405).send({ error: userConroller_messages_1.UserControllerErorr._400_METHOD_NOT_ALLOWED });
            }
            const users = await UserController.userService.getAllUsers();
            res.send(JSON.stringify(users));
        }
        catch (error) {
            res.status(500).send({ error: userConroller_messages_1.UserControllerErorr._500, details: error });
        }
    }
    async handleGetByIdUser(req, res) {
        try {
            res.setHeader('Content-Type', 'application/json');
            if (req.method !== 'GET') {
                res.status(405).send({ error: userConroller_messages_1.UserControllerErorr._400_METHOD_NOT_ALLOWED });
            }
            if ((0, regex_1.isValidUrlPath)(req.url)) {
                const users = await UserController.userService.getUserById(Number.parseInt(req.url.split('/')[1], 10));
                res.send(JSON.stringify(users));
            }
            else {
                res.status(400).send({ error: userConroller_messages_1.UserControllerErorr._400_WRONG_GET_ID });
            }
        }
        catch (error) {
            res.status(500).send({ error: userConroller_messages_1.UserControllerErorr._500, details: error });
        }
    }
    async handleAddUser(req, res) {
        try {
            res.setHeader('Content-Type', 'application/json');
            if (req.method !== 'POST') {
                res.status(405).send({ error: userConroller_messages_1.UserControllerErorr._400_METHOD_NOT_ALLOWED });
            }
            if ((0, regex_1.isValidPostBody)(req.body.login, req.body.password)) {
                const result = await UserController.userService.createUser(new types_1.User(req.body.login, req.body.password));
                result ? res.status(204).send() : res.status(400).send({ error: userConroller_messages_1.UserControllerErorr._400_USER_WAS_NOT_CREATED });
            }
            else {
                res.status(400).send({ error: userConroller_messages_1.UserControllerErorr._400_NOT_ALLOWED_TAGS });
            }
        }
        catch (error) {
            res.status(500).send({ error: userConroller_messages_1.UserControllerErorr._500, details: error });
        }
    }
    async handleDeleteUser(req, res) {
        try {
            res.setHeader('Content-Type', 'application/json');
            if (req.method !== 'DELETE') {
                res.status(405).send({ error: userConroller_messages_1.UserControllerErorr._400_METHOD_NOT_ALLOWED });
            }
            if ((0, regex_1.isValidUrlPath)(req.url)) {
                const result = await UserController.userService.deleteUser(Number.parseInt(req.url.split('/')[2], 10));
                result ? res.status(204).send() : res.status(400).send({ error: userConroller_messages_1.UserControllerErorr._400_USER_WAS_NOT_DELETED });
            }
            else {
                res.status(400).send({ error: userConroller_messages_1.UserControllerErorr._400_WRONG_DELETE_ID });
            }
        }
        catch (error) {
            res.status(500).send({ error: userConroller_messages_1.UserControllerErorr._500, details: error });
        }
    }
    async handleUpdateUser(req, res) {
        try {
            res.setHeader('Content-Type', 'application/json');
            if (req.method !== 'PUT') {
                res.status(405).send({ error: userConroller_messages_1.UserControllerErorr._400_METHOD_NOT_ALLOWED });
            }
            if ((0, regex_1.isValidPostBody)(req.body.login, req.body.password)) {
                const user = new types_1.User(req.body.login, req.body.password);
                user.id = req.url.split('/')[2];
                const result = await UserController.userService.updateUserById(user);
                result ? res.status(204).send() : res.status(400).send({ error: userConroller_messages_1.UserControllerErorr._400_USER_WAS_NOT_UPDATED });
            }
            else {
                res.status(400).send({ error: userConroller_messages_1.UserControllerErorr._400_NOT_ALLOWED_TAGS });
            }
        }
        catch (error) {
            res.status(500).send({ error: userConroller_messages_1.UserControllerErorr._500, details: error });
        }
    }
}
exports.UserController = UserController;
UserController.userService = new services_1.UserServiceImpl();
const RouterUserController = new UserController().router;
exports.RouterUserController = RouterUserController;
//# sourceMappingURL=userConroller.js.map
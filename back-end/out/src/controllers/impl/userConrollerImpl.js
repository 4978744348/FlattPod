"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterUserController = exports.UserControllerImpl = void 0;
const express_1 = require("express");
const services_1 = require("../../services");
const types_1 = require("../../types");
const regex_1 = require("../../utils/regex");
class UserControllerImpl {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', this.handleGetAllUsers);
        this.router.get('/:id', this.handleGetByIdUser);
        this.router.post('/create', this.handleAddUser);
        // this.router.put('/update/:id', this. handleUpdateUser);
        // this.router.delete('/delete/:id', this. handleDeleteUser);
    }
    async handleGetAllUsers(req, res) {
        try {
            if (req.method !== 'GET') {
                res.status(405).send('Method Not Allowed');
            }
            res.setHeader('Content-Type', 'application/json');
            const users = await UserControllerImpl.userService.getAllUsers();
            res.send(JSON.stringify(users));
        }
        catch (error) {
            // TODO: added log error
            res.status(500).send('Internal Server Error');
        }
    }
    async handleGetByIdUser(req, res) {
        try {
            if (req.method !== 'GET') {
                res.status(405).send('Method Not Allowed');
            }
            res.setHeader('Content-Type', 'application/json');
            if ((0, regex_1.isValidUrlPath)(req.url)) {
                const users = await UserControllerImpl.userService.getUserById(Number.parseInt(req.url.split('/')[1], 10));
                res.send(JSON.stringify(users));
            }
            else {
                res.status(400).send('wrong passing ID: /api/users/:id');
            }
        }
        catch (error) {
            // TODO: added log error
            res.status(500).send('Internal Server Error');
        }
    }
    async handleAddUser(req, res) {
        try {
            if (req.method !== 'POST') {
                res.status(405).send('Method Not Allowed');
            }
            res.setHeader('Content-Type', 'application/json');
            if ((0, regex_1.isValidPostBody)(req.body.login, req.body.password)) {
                const result = await UserControllerImpl.userService.createUser(new types_1.User(req.body.login, req.body.password));
                result ? res.status(204).send() : res.status(400).send('The user was not created');
            }
            else {
                res.status(400).send({ error: 'The body requst has not allowed any tags. Allowed only character(upper/low case) and digital symbols' });
            }
        }
        catch (error) {
            // TODO: added log error
            res.status(500).send('Internal Server Error');
        }
    }
}
exports.UserControllerImpl = UserControllerImpl;
UserControllerImpl.userService = new services_1.UserServiceImpl();
const RouterUserController = new UserControllerImpl().router;
exports.RouterUserController = RouterUserController;
//# sourceMappingURL=userConrollerImpl.js.map
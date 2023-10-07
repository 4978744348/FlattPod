import { Request, Response, Router } from "express";
import { UserService, UserServiceImpl } from '../services';
import { User } from '../types';
import { isValidPostBody, isValidUrlPath } from '../utils/regex';
import { UserControllerErorr } from '../utils/messages/controllers/userConroller.messages';


export class UserController {

  private static readonly userService: UserService = new UserServiceImpl();
  public readonly router: Router = Router();

  constructor () {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.handleGetAllUsers);
    this.router.get('/:id', this.handleGetByIdUser);
    this.router.post('/create', this.handleAddUser);
    this.router.delete('/delete/:id', this. handleDeleteUser);
    this.router.put('/update/:id', this. handleUpdateUser);
  }

  private async handleGetAllUsers(req: Request, res: Response): Promise<void> {
    try {
      res.setHeader('Content-Type', 'application/json');
      if (req.method !== 'GET') {
        res.status(405).send({ error: UserControllerErorr._400_METHOD_NOT_ALLOWED });
      }
      const users: User[] | null = await UserController.userService.getAllUsers();
      res.send(JSON.stringify(users));
    } catch (error) {
      res.status(500).send({ error: UserControllerErorr._500, details: error });
    }
  }

  private async handleGetByIdUser(req: Request, res: Response): Promise<void> {
    try {
      res.setHeader('Content-Type', 'application/json');
      if (req.method !== 'GET') {
        res.status(405).send({ error: UserControllerErorr._400_METHOD_NOT_ALLOWED });
      }
      if (isValidUrlPath(req.url)) {
        const users: User[] | null = await UserController.userService.getUserById(Number.parseInt(req.url.split('/')[1], 10));
        res.send(JSON.stringify(users));
      } else {
        res.status(400).send({ error: UserControllerErorr._400_WRONG_GET_ID });
      }
    } catch (error) {
      res.status(500).send({ error: UserControllerErorr._500, details: error });
    }
  }

  private async handleAddUser(req: Request, res: Response): Promise<void> {
    try {
      res.setHeader('Content-Type', 'application/json');
      if (req.method !== 'POST') {
        res.status(405).send({ error: UserControllerErorr._400_METHOD_NOT_ALLOWED });
      }
      if (isValidPostBody(req.body.login, req.body.password)) {
        const result: boolean | null = await UserController.userService.createUser(new User(req.body.login, req.body.password));
        result ? res.status(204).send() : res.status(400).send({ error: UserControllerErorr._400_USER_WAS_NOT_CREATED });
      } else {
        res.status(400).send({ error: UserControllerErorr._400_NOT_ALLOWED_TAGS });
      }
    } catch (error) {
      res.status(500).send({ error: UserControllerErorr._500, details: error });
    }
  }

  private async handleDeleteUser(req: Request, res: Response): Promise<void> {
    try {
      res.setHeader('Content-Type', 'application/json');
      if (req.method !== 'DELETE') {
        res.status(405).send({ error: UserControllerErorr._400_METHOD_NOT_ALLOWED });
      }
      if (isValidUrlPath(req.url)) {
        const result: boolean | null = await UserController.userService.deleteUser(Number.parseInt(req.url.split('/')[2], 10));
        result ? res.status(204).send() : res.status(400).send({ error: UserControllerErorr._400_USER_WAS_NOT_DELETED });
      } else {
        res.status(400).send({ error: UserControllerErorr._400_WRONG_DELETE_ID });
      }
    } catch (error) {
      res.status(500).send({ error: UserControllerErorr._500, details: error });
    }
  }

  private async handleUpdateUser(req: Request, res: Response): Promise<void> {
    try {
      res.setHeader('Content-Type', 'application/json');
      if (req.method !== 'PUT') {
        res.status(405).send({ error: UserControllerErorr._400_METHOD_NOT_ALLOWED });
      }
      if (isValidPostBody(req.body.login, req.body.password)) {
        const user: User = new User(req.body.login, req.body.password);
        user.id = req.url.split('/')[2];
        const result: boolean | null = await UserController.userService.updateUserById(user);
        result ? res.status(204).send() : res.status(400).send({ error: UserControllerErorr._400_USER_WAS_NOT_UPDATED });
      } else {
        res.status(400).send({ error: UserControllerErorr._400_NOT_ALLOWED_TAGS });
      }
    } catch (error) {
      res.status(500).send({ error: UserControllerErorr._500, details: error });
    }
  }

}
const RouterUserController: Router = new UserController().router;
export { RouterUserController };

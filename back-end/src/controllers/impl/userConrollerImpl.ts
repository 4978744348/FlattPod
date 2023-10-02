import { Request, Response, Router } from "express";
import { UserService, UserServiceImpl } from '../../services';
import { User } from '../../types';
import { UserController } from '../userController';
import { validationUrlPath } from '../../utils/regex';


export class UserControllerImpl implements UserController {

  private static readonly userService: UserService = new UserServiceImpl();
  public readonly router: Router = Router();

  constructor () {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.handleGetAllUsers);
    this.router.get('/:id', this.handleGetByIdUser);
    // this.router.post('/', this.handleAddUser);
    // this.router.put('/:id', this. handleUpdateUser);
    // this.router.delete('/:id', this. handleDeleteUser);
  }

  async handleGetAllUsers(req: Request, res: Response): Promise<void> {
    try {
      if (req.method !== 'GET') {
        res.status(405).send('Method Not Allowed');
      }
      const users: User[] = await UserControllerImpl.userService.getAllUsers();
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(users));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send('Internal Server Error');
    }
  }

  async handleGetByIdUser(req: Request, res: Response): Promise<void> {
    try {
      if (req.method !== 'GET') {
        res.status(405).send('Method Not Allowed');
      }
      if (validationUrlPath(req.url)) {
        const users: User[] = await UserControllerImpl.userService.getUserById(Number.parseInt(req.url.split('/')[1], 10));
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(users));
      } else {
        res.status(400).send('wrong passing ID: /api/users/:id');
      }
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send('Internal Server Error');
    }
  }
  // handleAddUser(): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }
  // handleUpdateUser(): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }
  // handleDeleteUser(): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }
}
const RouterUserController: Router = new UserControllerImpl().router;
export { RouterUserController };

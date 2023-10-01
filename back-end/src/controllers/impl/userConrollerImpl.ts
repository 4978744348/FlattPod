import { Request, Response, Router } from "express";
import { UserService, UserServiceImpl } from '../../services';
import { User } from '../../types';
import { UserController } from '../userController';


export class UserControllerImpl implements UserController {

  private static readonly userService: UserService = new UserServiceImpl();
  public readonly router: Router = Router();

  constructor () {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.handleGetAllUsers);
    // this.router.get('/:id', this.handleGetByIdUser);
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
      res.send(JSON.stringify(users));
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  }

  // handleGetByIdUser(): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }
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

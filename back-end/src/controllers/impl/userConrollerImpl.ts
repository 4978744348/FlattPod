import { Request, Response, Router } from "express";
import { UserService, UserServiceImpl } from '../../services';
import { User } from '../../types';
import { validationUrlPath } from '../../utils/regex';


export class UserControllerImpl {

  private static readonly userService: UserService = new UserServiceImpl();
  public readonly router: Router = Router();

  constructor () {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.handleGetAllUsers);
    this.router.get('/:id', this.handleGetByIdUser);
    this.router.post('/create', this.handleAddUser);
    // this.router.put('/update/:id', this. handleUpdateUser);
    // this.router.delete('/delete/:id', this. handleDeleteUser);
  }

  private async handleGetAllUsers(req: Request, res: Response): Promise<void> {
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

  private async handleGetByIdUser(req: Request, res: Response): Promise<void> {
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

  private async handleAddUser(req: Request, res: Response): Promise<void> {
    try {
      if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
      }
      const result = await UserControllerImpl.userService.createUser(new User(req.body.login, req.body.password));
      if (result) {
        res.status(204).send();
      } else {
        res.status(400).send('user was not created');
      }
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send('Internal Server Error');
    }
  }
  // handleUpdateUser(req: Request, res: Response): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }
  // handleDeleteUser(req: Request, res: Response): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }
}
const RouterUserController: Router = new UserControllerImpl().router;
export { RouterUserController };

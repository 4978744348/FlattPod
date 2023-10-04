import { User } from '../../../src/models/user';
import { UserService } from '../../../src/services/userSerrvice';
import { UserDaoImpl } from '../../../src/db/DAO/impl/userDaoImpl';

export class UserServiceImpl implements UserService {

  // TODO: should add try/catch
  private readonly  userDao: UserDaoImpl = new UserDaoImpl();

  async getAllUsers(): Promise<User[]> {
    return await this.userDao.getAll();
  }

  async getUserById(id: number): Promise<User[]> {
    return await this.userDao.getById(id);
  }

  async createUser(user: User): Promise<boolean> {
   return await this.userDao.add(user);
  }

  async deleteUser(id: number): Promise<boolean> {
    return await this.userDao.delete(id);
  }
}
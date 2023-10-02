import { User } from '../../../src/models/user';
import { UserService } from '../../../src/services/userSerrvice';
import { UserDaoImpl } from '../../../src/db/DAO/impl/userDaoImpl';

export class UserServiceImpl implements UserService {

  private readonly  userDao: UserDaoImpl = new UserDaoImpl();

  async getAllUsers(): Promise<User[]> {
    return await this.userDao.getAll();
  }

  async getUserById(id: number): Promise<User[]> {
    return await this.userDao.getById(id);
  }
}
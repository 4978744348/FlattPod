import { User } from '../../../src/models/user';
import { UserService } from '../../../src/services/userSerrvice';
import { UserDaoImpl } from '../../../src/db/DAO/impl/userDaoImpl';

export class UserServiceImpl implements UserService {
  async getAllUsers(): Promise<User[]> {
    const userDao: UserDaoImpl = new UserDaoImpl();
    const user: User[] = await userDao.getAll();
    return user;
  }
}
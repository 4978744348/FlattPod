import { User } from "../../../src/models/user";
import { UserService } from "../../../src/services/userSerrvice";
import { UserDaoImpl } from "../../../src/db/DAO/impl/userDaoImpl";

export class UserServiceImpl implements UserService {
  private readonly userDao: UserDaoImpl = new UserDaoImpl();

  async getAllUsers(): Promise<User[] | null> {
    try {
      return await this.userDao.getAll();
    } catch (error) {
      if (error) {
        throw error;
      }
    }
    return null;
  }

  async getUserById(id: number): Promise<User[] | null> {
    try {
      return await this.userDao.getById(id);
    } catch (error) {
      if (error) {
        throw error;
      }
    }
    return null;
  }

  async createUser(user: User): Promise<boolean | null> {
    try {
      return await this.userDao.add(user);
    } catch (error) {
      if (error) {
        throw error;
      }
    }
    return null;
  }

  async deleteUser(id: number): Promise<boolean | null> {
    try {
      return await this.userDao.deleteById(id);
    } catch (error) {
      if (error) {
        throw error;
      }
    }
    return null;
  }

  async updateUserById(user: User): Promise<boolean | null> {
    try {
      return await this.userDao.updateById(user);
    } catch (error) {
      if (error) {
        throw error;
      }
    }
    return null;
  }
}

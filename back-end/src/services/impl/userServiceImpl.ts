import { Buffer } from 'buffer';
import { User } from "../../../src/models/user";
import { UserService } from "../../../src/services/userSerrvice";
import { UserDaoImpl } from "../../../src/db/DAO/impl/userDaoImpl";
import { CREATE_USER_JWT_ERROR } from "../../utils/messages/services/userServiceImpl.messages";

export class UserServiceImpl implements UserService {

  private readonly userDao: UserDaoImpl = new UserDaoImpl();

  async createUserFromJWT(token: string): Promise<boolean | null> {
    try {
      const payload = token.split('.')[1];
      const user = JSON.parse(Buffer.from(payload, 'base64').toString());
      if (user.user_id !== undefined && user.email !== undefined) {
        return await this.userDao.add(new User(user.user_id, user.email));
      } else {
        throw new Error(JSON.stringify(CREATE_USER_JWT_ERROR));
      }
    } catch (error) {
      if (error) {
        throw error;
      }
    }
    return null;
  }

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

  async getUserById(id: string): Promise<User[] | null> {
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

  async deleteUser(id: string): Promise<boolean | null> {
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

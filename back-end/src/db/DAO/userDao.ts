import { User } from 'src/models/user';

export interface UserDao {
  add(user: User):Promise<boolean>;
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User[]>;
  delete(id: number): Promise<boolean>;
  updateById(user: User): Promise<boolean>;
}
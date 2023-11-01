import { User } from 'src/models/user';

export interface UserDao {
  add(user: User):Promise<boolean>;
  getAll(): Promise<User[]>;
  getById(id: string): Promise<User[]>;
  deleteById(id: string): Promise<boolean>;
  updateById(user: User): Promise<boolean>;
}
import { User } from 'src/models/user';

export interface UserDao {
  // add(user: User): void;
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User[]>;
  // delete(id: number): boolean;
  // update(id: number): boolean;
}
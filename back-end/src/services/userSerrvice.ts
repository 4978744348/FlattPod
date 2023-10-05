import { User } from 'src/models/user';

export interface UserService {
  getAllUsers (): Promise<User[]>;
  getUserById (id: number): Promise<User[]>;
  createUser (user: User): Promise<boolean>;
  deleteUser (id: number): Promise<boolean>;
  updateUserById (user: User): Promise<boolean>;
}
import { User } from 'src/models/user';

export interface UserService {
  getAllUsers (): Promise<User[]>;
  getUserById (id: number): Promise<User[]>;
}
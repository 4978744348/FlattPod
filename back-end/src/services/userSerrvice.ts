import { User } from 'src/models/user';

export interface UserService {
  getAllUsers (): Promise<User[] | null> ;
  getUserById (id: number): Promise<User[] | null>;
  createUser (user: User): Promise<boolean | null>;
  deleteUser (id: number): Promise<boolean | null>;
  updateUserById (user: User): Promise<boolean | null>;
}
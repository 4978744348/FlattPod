import { User } from 'src/models/user';

export interface UserService {
  getAllUsers (): Promise<User[] | null> ;
  getUserById (id: string): Promise<User[] | null>;
  createUser (user: User): Promise<boolean | null>;
  deleteUser (id: string): Promise<boolean | null>;
  updateUserById (user: User): Promise<boolean | null>;
  createUserFromJWT(token: string): Promise<boolean | null>;
}
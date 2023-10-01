import { Request, Response } from "express";

export interface UserController {
  handleGetAllUsers(req: Request, res: Response): Promise<void>;
  // handleGetByIdUser(): Promise<void>;
  // handleAddUser(): Promise<void>;
  // handleUpdateUser(): Promise<void>;
  // handleDeleteUser(): Promise<void>;
}

import { Request, Response } from "express";

export interface UserController {
  handleGetAllUsers(req: Request, res: Response): Promise<void>;
  handleGetByIdUser(req: Request, res: Response): Promise<void>;
  // handleAddUser(req: Request, res: Response): Promise<void>;
  // handleUpdateUser(req: Request, res: Response): Promise<void>;
  // handleDeleteUser(req: Request, res: Response): Promise<void>;
}

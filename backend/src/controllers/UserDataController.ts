import { Request, Response, NextFunction } from "express";
import UserService from "../services/UserService";
import { AppDataSource } from "../config/DataSource";

export default class UserDataController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService(AppDataSource);
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    const { nickname, password } = req.body;
    try {
      const user = await this.userService.createUser(nickname, password);
      res.status(201).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Verifica si error es una instancia de Error
        res.status(500).json({ error: error.message });
      } else {
        next(error);
      }
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    const { nickname } = req.params;
    try {
      const user = await this.userService.findUserByNickname(nickname);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json(user);
    } catch (error: unknown) {
      next(error);
    }
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.findAllUsers();
      res.json(users);
    } catch (error: unknown) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    const { nickname } = req.params;
    const updates = req.body; // Esto podría incluir campos como password, email, etc.
    try {
      const updatedUser = await this.userService.updateUser(nickname, updates);
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json(updatedUser);
    } catch (error: unknown) {
      next(error);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    const { nickname } = req.params;
    try {
      const success = await this.userService.deleteUser(nickname);
      if (!success) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(204).send();
    } catch (error: unknown) {
      next(error);
    }
  }
}

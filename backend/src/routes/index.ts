import express from "express";
import { loginController } from "../controllers/LoginController";
import UserDataController from "../controllers/UserDataController";

export const router = express.Router();
const userDataController = new UserDataController();

// Ruta per iniciar sessió
router.post("/login", loginController);

// Ruta per obtenir les dades d'usuari
router.get("/me", userDataController.getUser);

// Rutes per operacions CRUD d'usuaris
router.post("/users", userDataController.createUser.bind(userDataController));
router.get("/users", userDataController.getUser);
router.get("/users/:nickname", userDataController.getAllUsers);
router.put("/users/:nickname", userDataController.updateUser);
router.delete("/users/:nickname", userDataController.deleteUser);

export default router;

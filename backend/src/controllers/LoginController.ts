import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UserService from '../services/UserService';
import AuthenticationService from '../services/AuthenticationService';
import { AppDataSource } from '../config/DataSource';
import errorHandler from '../middleware/ErrorMiddleware';

const userService = new UserService(AppDataSource);
const authService = new AuthenticationService();


// Lógica para verificar las credenciales del usuario y generar el token JWT
export const loginController = async (req: Request, res: Response) => {
  const { nickname, password } = req.body;

  if (!nickname || !password) {
    return res.status(400).json({ message: 'Nickname y password son requeridos' });
  }

  try {
    const user = await userService.findUserByNickname(nickname);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña proporcionada con la contraseña encriptada almacenada en la base de datos
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Utilizar AuthenticationService para generar el token
    const token = authService.generateToken(user);

    // Enviar el token como respuesta
    res.json({ message: 'Login exitoso', token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error al procesar la solicitud' });
  }
};



import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../entities/User';
import { AppDataSource } from '../config/DataSource';

export default class AuthenticationService {
  private dataSource = AppDataSource;

  //Validar usuari i password
  async validateUser(nickname: string, password: string): Promise<boolean> {
    const userRepository = this.dataSource.getRepository(User);
    const user = await userRepository.findOneBy({ nickname });
    if (!user || !user.password) {
      return false;
    }
    return await bcrypt.compare(password, user.password);
  }

  generateToken(user: User): string {
    const secretKey = process.env.JWT_SECRET || 'yourSecretKey';
    return jwt.sign({ userId: user.id, nickname: user.nickname }, secretKey, { expiresIn: '1h' });
  }  
}

  
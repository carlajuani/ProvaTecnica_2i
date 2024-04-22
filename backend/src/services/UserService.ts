import bcrypt from 'bcrypt';
import { User } from '../entities/User';
import { AppDataSource } from '../config/DataSource';
import { DataSource } from 'typeorm';

export default class UserService {
  
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  
  async findUserByNickname(nickname: string): Promise<User | null> {
    const userRepository = this.dataSource.getRepository(User);
    const user = await userRepository.findOneBy({ nickname: nickname });
    return user || null; 
  }
  
  async createUser(nickname: string, password: string) {
    const userRepository = this.dataSource.getRepository(User);
    
    const hashedPassword = await this.hashPassword(password);
    const user = userRepository.create({
      nickname: nickname,
      password: hashedPassword,
    });
  
    await userRepository.save(user);
    return user;
  }

  async updateUser(nickname: string, updates: {
    nickname?: string,
    password?: string,
    nombre?: string,
    apellidos?: string,
    dirección?: string,
    email?: string
  }): Promise<User | null> {
    const userRepository = this.dataSource.getRepository(User);
    const user = await userRepository.findOneBy({ nickname });
    if (!user) {
      return null;  // si no troba l'usuari
    }

    // Aplica les actualizaciones si es dóna el cas
    if (updates.nickname !== undefined) user.nickname = updates.nickname;
    if (updates.password !== undefined) user.password = await this.hashPassword(updates.password);
    if (updates.nombre !== undefined) user.nombre = updates.nombre;
    if (updates.apellidos !== undefined) user.apellidos = updates.apellidos;
    if (updates.dirección !== undefined) user.dirección = updates.dirección;
    if (updates.email !== undefined) user.email = updates.email;

    await userRepository.save(user);
    return user;
  }

  async deleteUser(nickname: string): Promise<boolean> {
    const userRepository = this.dataSource.getRepository(User);
    const user = await userRepository.findOneBy({ nickname });
    if (!user) {
      return false;
    }

    await userRepository.remove(user);
    return true;
  }

  async findAllUsers(): Promise<User[]> {
    const userRepository = this.dataSource.getRepository(User);
    return userRepository.find();
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  }
}

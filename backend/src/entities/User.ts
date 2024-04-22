import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  nickname!: string;

  @Column({ type: "varchar" })
  password!: string;

  @Column({ type: "varchar" })
  nombre?: string;

  @Column({ type: "varchar" })
  apellidos?: string;

  @Column({ type: "varchar" })
  dirección?: string;

  @Column({ type: "varchar" })
  email?: string;

}
//TODO: canviar la inicialització opcional o donar valors inicials dels atributs que calguin

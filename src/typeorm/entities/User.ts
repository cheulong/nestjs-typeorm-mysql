import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ default: new Date().toISOString().slice(0, 19).replace('T', ' ') })
  createdAt: Date;

  @Column({ nullable: true })
  authStrategy: string;
}

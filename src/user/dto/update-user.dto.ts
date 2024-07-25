import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../entities/user.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'number', length: 10 })
  amount: number;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar' })
  description: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;
};

import AccountState from 'src/types/AccountState';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: AccountState.CREATED })
  isActive: AccountState;
}

export default Account;

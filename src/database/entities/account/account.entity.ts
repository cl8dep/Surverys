import AccountRole from '../../types/AccountRole';
import AccountStatus from '../../types/AccountStatus';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
import Media from '../media/media.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  verifiedEmail: boolean;

  @OneToOne(() => Media)
  @Column()
  photo: string;

  @Column()
  password: string;

  @Column()
  status: AccountStatus;

  @Column()
  role: AccountRole;

  @UpdateDateColumn()
  modifiedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}

export default Account;

import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { getCurrentEpoch } from '../utils/helpers';

@Entity()
@Index(['user', 'created_at'])
export class Receipt {
  @Index()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 42,
  })
  user: string;

  @Column({
    type: 'varchar',
    length: 78,
  })
  price: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  token_id: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  amount: string;

  @Column({
    type: 'varchar',
    length: 150,
  })
  tx_hash: string;

  @Column({ type: 'int', nullable: false, readonly: true })
  created_at: number;

  @BeforeInsert()
  public setCreatedAt() {
    this.created_at = getCurrentEpoch();
  }
}

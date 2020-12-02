import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('char')
  username: string;

  @Column('char')
  password: string;

  @Column('boolean', {default: false})
  is_banned: boolean;

  @Column('char')
  proxy: string;
}

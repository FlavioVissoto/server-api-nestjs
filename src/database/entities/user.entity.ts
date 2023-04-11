import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { UserTableStructure } from '../structure/user-table.structure';

@Entity({ name: UserTableStructure.tablename })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column(UserTableStructure.columns.name)
  name: string;

  @Column(UserTableStructure.columns.email)
  email: string;

  @Column(UserTableStructure.columns.cpf)
  cpf: string;

  @Column(UserTableStructure.columns.typeUser)
  typeUser: number;

  @Column(UserTableStructure.columns.phone)
  phone: string;

  @Column(UserTableStructure.columns.password)
  password: string;

  @Column(UserTableStructure.columns.created_at)
  created_at: Date;

  @Column(UserTableStructure.columns.updatedd_at)
  updatedd_at: Date;
}

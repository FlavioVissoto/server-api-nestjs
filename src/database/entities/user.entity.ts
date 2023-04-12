import { Column, Entity, PrimaryColumn } from 'typeorm';

import { AutoMap } from '@automapper/classes';
import { UserTableStructure } from '../structure/user-table.structure';

@Entity({ name: UserTableStructure.tablename })
export class UserEntity {
  @AutoMap()
  @PrimaryColumn(UserTableStructure.columns.id)
  id: string;

  @AutoMap()
  @Column(UserTableStructure.columns.name)
  name: string;

  @AutoMap()
  @Column(UserTableStructure.columns.email)
  email: string;

  @AutoMap()
  @Column(UserTableStructure.columns.cpf)
  cpf: string;

  @AutoMap()
  @Column(UserTableStructure.columns.typeUser)
  typeUser: number;

  @AutoMap()
  @Column(UserTableStructure.columns.phone)
  phone: string;

  @AutoMap()
  @Column(UserTableStructure.columns.password)
  password: string;

  @AutoMap()
  @Column(UserTableStructure.columns.created_at)
  created_at: Date;

  @AutoMap()
  @Column(UserTableStructure.columns.updatedd_at)
  updatedd_at: Date;
}

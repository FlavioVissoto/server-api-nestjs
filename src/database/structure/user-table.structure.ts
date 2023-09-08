import { ColumnOptions, PrimaryColumnOptions } from 'typeorm';

export const UserTableStructure = {
  tablename: 'TB_USER',
  columns: {
    id: {
      name: 'id',
      primary: true,
      generated: 'uuid',
      nullable: false,
      unique: true,
      type: 'uuid',
    } as PrimaryColumnOptions,
    name: {
      name: 'name',
      nullable: false,
      type: 'character varying',
    } as ColumnOptions,
    lastname: {
      name: 'lastname',
      nullable: false,
      type: 'character varying',
    } as ColumnOptions,
    email: {
      name: 'email',
      nullable: false,
      unique: true,
      type: 'character varying',
    } as ColumnOptions,
    cpf: {
      name: 'cpf',
      nullable: false,
      type: 'bigint',
    } as ColumnOptions,
    typeUser: {
      name: 'typeUser',
      nullable: false,
      type: 'integer',
    } as ColumnOptions,
    phone: {
      name: 'phone',
      nullable: true,
      type: 'character varying',
    } as ColumnOptions,
    password: {
      name: 'password',
      nullable: false,
      type: 'character varying',
    } as ColumnOptions,
    created_at: {
      name: 'created_at',
      nullable: false,
      type: 'timestamp without time zone',
      default: 'now()',
    } as ColumnOptions,
    updatedd_at: {
      name: 'updatedd_at',
      nullable: false,
      type: 'timestamp without time zone',
      default: 'now()',
    } as ColumnOptions,
    deprecated: false,
  },
} as const;

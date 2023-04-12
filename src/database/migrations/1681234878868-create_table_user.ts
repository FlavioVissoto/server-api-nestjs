import { ColumnOptions, MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

import { UserTableStructure } from './../structure/user-table.structure';

export class CreateTableUser1681234878868 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns: TableColumn[] = [];

    for (const key in UserTableStructure.columns) {
      if (Object.prototype.hasOwnProperty.call(UserTableStructure.columns, key)) {
        const element: ColumnOptions = UserTableStructure.columns[key];
        columns.push({
          name: element.name,
          isNullable: element.nullable ?? false,
          isUnique: element.unique ?? false,
          type: element.type,
          default: element.default ?? undefined,
        } as TableColumn);
      }
    }

    const table: Table = new Table({
      schema: process.env.DATABASE_SCHEMA,
      database: process.env.DATABASE_DATABASE,
      name: process.env.DATABASE_SCHEMA + '.' + UserTableStructure.tablename,
      columns: columns,
      indices: [
        {
          columnNames: [UserTableStructure.columns.email.name],
        },
      ],
    });

    await queryRunner.createTable(table, true, true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(UserTableStructure.tablename, true, true, true);
  }
}

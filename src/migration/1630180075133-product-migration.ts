import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class productMigration1630180075133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "public.users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "price",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "unit_measurement",
                    type: "varchar",
                    isNullable: false
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

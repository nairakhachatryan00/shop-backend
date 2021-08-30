import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class userMigration1630156431222 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "public.users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "firstname",
                    type: "varchar",
                },
                {
                    name: "lastname",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "address",
                    type: "varchar",
                    isNullable: false
                }
            ]
        }), true)
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

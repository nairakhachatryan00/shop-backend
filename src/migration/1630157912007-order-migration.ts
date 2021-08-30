import { MigrationInterface, QueryRunner } from "typeorm";

export class orderMigration1630157912007 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE Orders (
            id uuid ,
            parent uuid NULL,
            price int NOT NULL,
            product uuid NOT NULL,
            customer uuid NOT NULL,
            status varchar(40)  NOT NULL,
            PRIMARY KEY (id)
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

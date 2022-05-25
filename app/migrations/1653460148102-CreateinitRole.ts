import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateinitRole1653460148102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "Roles"(id,name) VALUES (1,'Administrador');`),
        await queryRunner.query(`INSERT INTO "Roles"(id,name) VALUES (2,'User');`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "Roles" WHERE id = 1;`),
        await queryRunner.query(`DELETE FROM "Roles" WHERE id = 2;`)
    }
}

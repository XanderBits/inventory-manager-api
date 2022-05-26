import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateinitRole1653460148102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO Roles(name) VALUES ('Administrador');`),
        await queryRunner.query(`INSERT INTO Roles(name) VALUES ('User');`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM Roles WHERE id = 1;`),
        await queryRunner.query(`DELETE FROM Roles WHERE id = 2;`)
    }
}

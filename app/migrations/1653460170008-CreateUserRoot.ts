import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUserRoot1653460170008 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO users(id,name,lastname,email,password,"roleId") 
        VALUES(1,'User','Root','${process.env.USER_ROOT_EMAIL}','${process.env.USER_ROOT_PASSWORD}',1);`
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM Users WHERE id = 1;`)
    }
}

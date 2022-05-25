import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUserRoot1653460170008 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "Users"(id,name,password,role) 
                                VALUES (1,'UserRoot','useRoot!26528',1);`
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "Users" WHERE id = 1;`)
    }
}

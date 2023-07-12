import { MigrationInterface, QueryRunner } from "typeorm"

export class ProductChanged1689152002699 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD COLUMN "grape" varchar`)
        await queryRunner.query(`ALTER TABLE "product" ADD COLUMN "year" smallint`)
        await queryRunner.query(`ALTER TABLE "product" ADD COLUMN "alchool" smallint`)
          
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "grape" `)
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "year" `)
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "alchool" `)
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class PriceListsForSaleChannel1689604583878 implements MigrationInterface {
    name = 'PriceListsForSaleChannel1689604583878'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE "price_list" ADD "sales_channel_id" character varying`);

        await queryRunner.query(`ALTER TABLE "price_list" ADD CONSTRAINT "FK_ee8ac73b269ac1880e7478705ee" FOREIGN KEY ("sales_channel_id") REFERENCES "sales_channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE "price_list" DROP CONSTRAINT "FK_ee8ac73b269ac1880e7478705ee"`);

        await queryRunner.query(`ALTER TABLE "price_list" DROP COLUMN "sales_channel_id"`);

    }

}

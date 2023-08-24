import { MigrationInterface, QueryRunner } from 'typeorm';

export class ReceiptAddTokenId1692862984915 implements MigrationInterface {
  name = 'ReceiptAddTokenId1692862984915';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "receipt" ADD "token_id" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "receipt" DROP COLUMN "token_id"`);
  }
}

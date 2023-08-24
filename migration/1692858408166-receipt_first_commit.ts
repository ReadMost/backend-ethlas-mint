import { MigrationInterface, QueryRunner } from "typeorm";

export class ReceiptFirstCommit1692858408166 implements MigrationInterface {
    name = 'ReceiptFirstCommit1692858408166'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "receipt" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user" character varying(42) NOT NULL, "price" character varying(78) NOT NULL, "amount" integer NOT NULL, "tx_hash" character varying(150) NOT NULL, "created_at" integer NOT NULL, CONSTRAINT "PK_b4b9ec7d164235fbba023da9832" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b4b9ec7d164235fbba023da983" ON "receipt" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_61d2a53afb992b2be09279788e" ON "receipt" ("user", "created_at") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_61d2a53afb992b2be09279788e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b4b9ec7d164235fbba023da983"`);
        await queryRunner.query(`DROP TABLE "receipt"`);
    }

}

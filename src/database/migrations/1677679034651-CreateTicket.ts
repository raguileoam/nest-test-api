import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTicket1677679034651 implements MigrationInterface {
  name = 'CreateTicket1677679034651';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ticket_status" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a39055e902c270197f3711e0ee3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "ticket" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "attentionId" character varying NOT NULL, "ticketStatusId" integer, "userId" integer, CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticket" ADD CONSTRAINT "FK_3b06a421e88dc6c23b29eb70d50" FOREIGN KEY ("ticketStatusId") REFERENCES "ticket_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticket" ADD CONSTRAINT "FK_0e01a7c92f008418bad6bad5919" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "ticket" DROP CONSTRAINT "FK_0e01a7c92f008418bad6bad5919"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticket" DROP CONSTRAINT "FK_3b06a421e88dc6c23b29eb70d50"`,
    );
    await queryRunner.query(`DROP TABLE "ticket"`);
    await queryRunner.query(`DROP TABLE "ticket_status"`);
  }
}

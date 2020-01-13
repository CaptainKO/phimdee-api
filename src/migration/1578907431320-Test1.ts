import {MigrationInterface, QueryRunner} from "typeorm";

export class Test11578907431320 implements MigrationInterface {
    name = 'Test11578907431320'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `username`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `username` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `username`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `username` varchar(230) NOT NULL", undefined);
    }

}

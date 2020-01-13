import {MigrationInterface, QueryRunner} from "typeorm";

export class migrateMovie1578908240117 implements MigrationInterface {
    name = 'migrateMovie1578908240117'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `movie` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `rate` int NOT NULL, `date` datetime NOT NULL, `totalEpisode` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `movie`", undefined);
    }

}

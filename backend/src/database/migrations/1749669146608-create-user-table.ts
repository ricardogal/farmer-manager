import * as bcrypt from 'bcrypt';
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1749669146608 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const hasUserTable = await queryRunner.hasTable('user');
        if (!hasUserTable) {
          await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'email',
                type: 'varchar',
                isUnique: true,
              },
              {
                name: 'password',
                type: 'varchar',
              },
              {
                name: 'role',
                type: 'varchar',
                default: `'user'`,
              },
              {
                name: 'createdAt',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updatedAt',
                type: 'timestamp',
                default: 'now()',
              },
            ],
          }));
        }
        // Cria um usuário seed com senha criptografada
        const passwordHash = await bcrypt.hash('admin123', 10);
        await queryRunner.query(`
          INSERT INTO "user" ("id", "email", "password", "role")
          VALUES (uuid_generate_v4(), 'admin@example.com', '${passwordHash}', 'admin')
        `);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
      }

}

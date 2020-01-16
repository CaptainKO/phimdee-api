
import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'
import { User } from 'src/database/entity/user.entity'
 
export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(User)({ roles: ["admin"] }).seedMany(10)
  }
}
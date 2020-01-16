import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { User } from 'src/database/entity/user.entity'

interface IUser {
  username: string;
  role: string;
  email: string;
  password: string;
}


const USERS: IUser[] = [
  {
    username: 'thong',
    email: 'deoyellow@gmail.com',
    role: 'admin',
    password: '123456',
  }
]

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(USERS)
      .execute()
  }
}
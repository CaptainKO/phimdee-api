import {
  EntityRepository, Repository,
} from "typeorm";
import { User } from "src/database/entity/user.entity";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  // create() {

  // }
}

export default new UserRepository();
import {
  EntityRepository, Repository,
} from "typeorm";
import { User } from "@entity/user.entity";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  // create() {

  // }
}

export default new UserRepository();
import { 
  EntityRepository, Repository,
} from "typeorm";
import { User } from "@entity/user.entity";
export type GenderType = "male" | "female";
export enum Gender {
  male = "male", female = "female"
}
@EntityRepository(User)
class UserRepository extends Repository<User> {

}

export default new UserRepository();
import { 
  EntityRepository, Repository, getRepository 
} from "typeorm";
import { User } from "@entity/user.entity";
export type GenderType = "male" | "female";
export enum Gender {
  male = "male", female = "female"
}
@EntityRepository(User)
export class UserRepository extends Repository<User> {

}
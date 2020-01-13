import { 
  EntityRepository, Repository, getRepository 
} from "typeorm";
import { User } from "@entity/user.entity";
import * as util from 'util';
export type GenderType = "male" | "female";
export enum Gender {
  male = "male", female = "female"
}
@EntityRepository(User)
export class StudentRepository extends Repository<User> {

}
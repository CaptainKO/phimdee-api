import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from "class-validator";
import { UserRepository } from "src/repository/user.repository";

@ValidatorConstraint({ async: true })
export class IsUserAlreadyExistConstraint implements ValidatorConstraintInterface {

  validate(userName: any, args: ValidationArguments) {
    // @ts-ignore
    return UserRepository.findOneByName(userName).then(user => {
      if (user) return false;
      return true;
    });
  }

}

export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserAlreadyExistConstraint
    });
  };
}
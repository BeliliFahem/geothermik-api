import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({ name: 'IsNumberInRange', async: false })
@Injectable()
export class IsNumberInRangePipe implements ValidatorConstraintInterface {
  validate(value: number, args: ValidationArguments) {
    const [min, max] = args.constraints;
    return value >= min && value <= max;
  }

    defaultMessage(args: ValidationArguments) {
        return `The value must be between ${args.constraints[0]} and ${args.constraints[1]}.`;
    }
}
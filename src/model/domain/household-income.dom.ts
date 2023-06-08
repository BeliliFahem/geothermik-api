import { IsPositive, Validate } from "class-validator";
import { Amount } from "./";
import { IsNumberInRangePipe } from "../../validation-pipes/is-number-in-range.pipe";

export class HouseholdIncomeAmount extends Amount {

    constructor(value: number) {
        super(value);
    }
    
    @IsPositive()
    @Validate(IsNumberInRangePipe, [10000, 100000])
    protected value: number;

}
import { Max, Min } from "class-validator";
import { Amount } from "./";

export class HouseholdIncomeAmount extends Amount {

    constructor(value: number) {
        super(value);
    }
    
    @Min(10000)
    @Max(100000)
    protected value: number;

}
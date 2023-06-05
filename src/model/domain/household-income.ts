import { Amount } from "./amount";

export class HouseholdIncomeAmount extends Amount {
    isInAcceptedRange(): boolean {
        return this.value >= 10000 && this.value <= 100000;
    }
}
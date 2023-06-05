import { Rate } from ".";
// TODO: add unit tests
export class Amount {

    protected value: number;

    constructor(value: number) {
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    substact(amount: Amount): Amount {
        if(this.value < amount.getValue()) {
            throw new Error("Cannot substract a greater amount from a smaller one.");
        }
        
        return new Amount(this.value - amount.getValue());
    }

    divideBy(value: number): Amount {
        if (value === 0) {
            throw new Error("Cannot divide by zero.");
        }

        return new Amount(this.value / value);
    }

    applyRate(rate: Rate): Amount {
        return new Amount(this.value * rate.getValue());
    }

    isEqualOrGreaterThan(other: Amount): boolean {
        return this.value >= other.getValue();
    }
}
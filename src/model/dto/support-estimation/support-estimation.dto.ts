import { Amount } from "../../../model/domain";

export class SupportEstimationDto {
    isEligible = false;
    supportAmount: Amount;
    eligibilityMessage: string;

    private constructor(isEligible: boolean, supportAmount: Amount, eligibilityMessage: string) {
        this.isEligible = isEligible;
        this.supportAmount = supportAmount;
        this.eligibilityMessage = eligibilityMessage;
    }

    static createEligible(supportAmount: Amount): SupportEstimationDto {
        return new SupportEstimationDto(
            true,
            supportAmount,
            "Félicitations ! Vous êtes éligible à notre programme d'aides et d'accompagnement."
        );
    }

    static createNotEligible(): SupportEstimationDto {
        return new SupportEstimationDto(
            false,
            new Amount(0),
            "Vous n'êtes pas éligible à notre programme d'aides et d'accompagnement."
        );
    }

    
}
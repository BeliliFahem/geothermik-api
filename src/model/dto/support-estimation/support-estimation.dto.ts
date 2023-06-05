export class SupportEstimationDto {
    isEligible = false;
    supportAmount: number;
    eligibilityMessage: string;

    private constructor(isEligible: boolean, supportAmount: number, eligibilityMessage: string) {
        this.isEligible = isEligible;
        this.supportAmount = supportAmount;
        this.eligibilityMessage = eligibilityMessage;
    }

    static createEligible(supportAmount: number): SupportEstimationDto {
        return new SupportEstimationDto(
            true,
            supportAmount,
            "Félicitations ! Vous êtes éligible à notre programme d'aides et d'accompagnement."
        );
    }

    static createNotEligible(): SupportEstimationDto {
        return new SupportEstimationDto(
            false,
            0,
            "Vous n'êtes pas éligible à notre programme d'aides et d'accompagnement."
        );
    }

    
}
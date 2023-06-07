import { Injectable } from '@nestjs/common';
import { SupportEstimationRequestDto, SupportEstimationDto } from '../../model/dto/support-estimation';
import { Amount, Rate } from '../../model/domain';

@Injectable()
export class SupportService {

    isElligbleForSupport(supportEstimationRequestDto: SupportEstimationRequestDto): SupportEstimationDto {

        if (supportEstimationRequestDto.isOwner) {
            const supportAmount = this.calculateSupportAmount(supportEstimationRequestDto);
            if(supportAmount.getValue() > 0) {
                return SupportEstimationDto.createEligible(supportAmount.getValue());
            }
        }
        return SupportEstimationDto.createNotEligible();
    }

    private calculateSupportAmount(supportEstimationRequestDto: SupportEstimationRequestDto): Amount {
        const projectCost = this.calculateProjectCost(supportEstimationRequestDto.surface);
        const projectCostWithRatio = projectCost.applyRate(new Rate(0.75));

        const adjustedHouseholdIncomes = supportEstimationRequestDto.householdIncomes
            .divideBy(supportEstimationRequestDto.householdPersonCount)
            .applyRate(new Rate(0.15));

        try {
            const supportAmount = projectCostWithRatio.substract(adjustedHouseholdIncomes);
            return supportAmount;
        } catch (error) {
            return new Amount(0);
        }
    }

    private calculateProjectCost(surface: number): Amount {
        return new Amount(surface * 80);
    }
}

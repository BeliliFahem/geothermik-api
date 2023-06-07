import { Test, TestingModule } from '@nestjs/testing';
import { SupportService } from './support.service';
import { SupportEstimationDto, SupportEstimationRequestDto } from '../../model/dto/support-estimation';
import { Amount, HouseholdIncomeAmount } from '../../model/domain';

describe('SupportService', () => {
  let service: SupportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportService],
    }).compile();

    service = module.get<SupportService>(SupportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should not be eligible when is not owner', () => {
    const supportEstimationRequestDto = new SupportEstimationRequestDto();
    supportEstimationRequestDto.isOwner = false;
    expect(service.isElligbleForSupport(supportEstimationRequestDto)).toEqual(SupportEstimationDto.createNotEligible());
  });

  describe('When is owner', () => {
    it('project cost should be eligible equal to 4800', () => {
      expect(service['calculateProjectCost'](60))
        .toEqual(new Amount(4800));
    });

    it('support amount should equal to 3050', () => {
      const supportEstimationRequestDto = new SupportEstimationRequestDto();
      supportEstimationRequestDto.isOwner = true;
      supportEstimationRequestDto.surface = 60;
      supportEstimationRequestDto.householdIncomes = new HouseholdIncomeAmount(11000);
      supportEstimationRequestDto.householdPersonCount = 3;
      expect(service['calculateSupportAmount'](supportEstimationRequestDto))
        .toEqual(new Amount(3050));
    });

    it('should be eligible when all conditions are satisfied', () => {
      const supportEstimationRequestDto = new SupportEstimationRequestDto();
      supportEstimationRequestDto.isOwner = true;
      supportEstimationRequestDto.surface = 60;
      supportEstimationRequestDto.householdIncomes = new HouseholdIncomeAmount(11000);
      supportEstimationRequestDto.householdPersonCount = 3;

      expect(service.isElligbleForSupport(supportEstimationRequestDto))
        .toEqual(SupportEstimationDto.createEligible(3050));
    });

    it('should not be eligible when support amount is equal to zero', () => {
      const supportEstimationRequestDto = new SupportEstimationRequestDto();
      supportEstimationRequestDto.isOwner = true;
      supportEstimationRequestDto.surface = 24;
      supportEstimationRequestDto.householdIncomes = new HouseholdIncomeAmount(11000);
      supportEstimationRequestDto.householdPersonCount = 1;

      expect(service.isElligbleForSupport(supportEstimationRequestDto))
        .toEqual(SupportEstimationDto.createNotEligible());
    });

    it('should not be eligible when support amount is equal to zero', () => {
      const supportEstimationRequestDto = new SupportEstimationRequestDto();
      supportEstimationRequestDto.isOwner = true;
      supportEstimationRequestDto.surface = 24;
      supportEstimationRequestDto.householdIncomes = new HouseholdIncomeAmount(11000);
      supportEstimationRequestDto.householdPersonCount = 1;

      expect(service.isElligbleForSupport(supportEstimationRequestDto))
        .toEqual(SupportEstimationDto.createNotEligible());
    });
  });
});

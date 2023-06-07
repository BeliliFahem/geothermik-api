import { Test, TestingModule } from '@nestjs/testing';
import { SupportController } from './support.controller';
import { SupportEstimationDto, SupportEstimationRequestDto } from '../model/dto/support-estimation';
import { SupportService } from '../services/support/support.service';

describe('SupportController', () => {
  let supportController: SupportController;
  let supportService: SupportService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SupportController],
      providers: [SupportService],
    }).compile();

    supportService = app.get<SupportService>(SupportService);
    supportController = app.get<SupportController>(SupportController);
    jest.restoreAllMocks();
  });

  describe('root', () => {
    it('should call isElligbleForSupport and return not eligible', () => {
      const supportEstimationRequestDto = new SupportEstimationRequestDto();
      const expectedResult = SupportEstimationDto.createNotEligible();

      const isElligbleForSupportCallSpy = jest.spyOn(supportService, 'isElligbleForSupport').mockImplementation((a) => expectedResult);

      expect(supportController.estimateSupport(supportEstimationRequestDto)).toEqual(expectedResult);

      expect(isElligbleForSupportCallSpy).toHaveBeenCalledTimes(1);
    });
  });
});

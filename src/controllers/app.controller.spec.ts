import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { SupportEstimationDto, SupportEstimationRequestDto } from '../model/dto/support-estimation';
import { SupportService } from '../services/support/support.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [SupportService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    xit('should return not eligible', () => {
      // TODO: fix this test
      const supportEstimationRequestDto = new SupportEstimationRequestDto();
      expect(appController.estimateSupport(supportEstimationRequestDto)).toBe(SupportEstimationDto.createNotEligible());
    });
  });
});

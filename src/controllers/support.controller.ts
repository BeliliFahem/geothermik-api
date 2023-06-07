import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SupportEstimationRequestDto, SupportEstimationDto } from '../model/dto/support-estimation';
import { SupportService } from '../services/support/support.service';

@ApiTags('geothermik')
@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @ApiOkResponse({ description: 'Endpoint to estimate the support eligibility and amount' })
  @Post('estimations')
  estimateSupport(@Body() supportEstimationRequestDto: SupportEstimationRequestDto): SupportEstimationDto {
    return this.supportService.isElligbleForSupport(supportEstimationRequestDto);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SupportEstimationRequestDto, SupportEstimationDto } from '../model/dto/support-estimation';
import { SupportService } from '../services/support/support.service';

@ApiTags('geothermik')
@Controller()
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @ApiOkResponse({ description: 'Hello description.' })
  @Post()
  estimateSupport(@Body() supportEstimationRequestDto: SupportEstimationRequestDto): SupportEstimationDto {
    return this.supportService.isElligbleForSupport(supportEstimationRequestDto);
  }
}

import { Module } from '@nestjs/common';
import { SupportService } from './services/support/support.service';
import { SupportController } from './controllers/support.controller';

@Module({
  imports: [],
  controllers: [SupportController],
  providers: [SupportService],
})
export class AppModule {}

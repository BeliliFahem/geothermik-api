import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SupportService } from './services/support/support.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [SupportService],
})
export class AppModule {}

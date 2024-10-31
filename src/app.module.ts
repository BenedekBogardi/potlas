import { Module } from '@nestjs/common';
import { VacationRequestController } from './app.controller';
import { VacationRequestService } from './app.service';


@Module({
  imports: [],
  controllers: [VacationRequestController],
  providers: [VacationRequestService],
})
export class AppModule {}
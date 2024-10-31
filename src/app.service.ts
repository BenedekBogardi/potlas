import { Injectable, BadRequestException } from '@nestjs/common';
import { VacationRequestDto } from './szabadsagkeres.dto';

@Injectable()
export class VacationRequestService {
  validateRequest(dto: VacationRequestDto): void {
    const startDate = new Date(dto.startDate);
    const endDate = new Date(dto.endDate);

    if (startDate >= endDate) {
      throw new BadRequestException('A kezdődátumnak korábbinak kell lennie a végsőnél!');
    }
  }
}
export class AppService {}
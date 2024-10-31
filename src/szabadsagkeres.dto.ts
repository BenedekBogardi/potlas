import { IsNotEmpty, IsDateString, IsBoolean, Matches, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class VacationRequestDto {
  @IsNotEmpty()
  name: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  paidLeave: boolean;

  @Matches(/^[A-Z]{3}-[1-9]{3}$/, { message: 'Alkalmazott azonosító helyes formátuma: ABC-123' })
  employeeId: string;

  @MinLength(30, { message: 'Az indoklásnak legalább 30 karakter hosszúnak kell lennie!' })
  reason: string;
}
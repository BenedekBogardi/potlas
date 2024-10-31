import { Controller, Get, Render } from '@nestjs/common';
import { Body, Post, Res, Redirect } from '@nestjs/common';
import { VacationRequestDto } from './szabadsagkeres.dto';
import { VacationRequestService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppController {
  @Get('index')
  @Render('index')
  showForm() {
    return {};
  }
  
}
@Controller('vacation-request')
export class VacationRequestController {
  constructor(private readonly vacationRequestService: VacationRequestService) {}

  @Get()
  @Render('index')
  showForm() {
    return {};
  }
  @Post()
  async submitVacationRequest(
    @Body() vacationRequestDto: VacationRequestDto,
    @Res() res: Response,
  ) {
    try {
      await this.vacationRequestService.validateRequest(vacationRequestDto);
      res.redirect('success');
    } catch (error) {
      res.redirect(`index?error=${encodeURIComponent(error.message)}`);
    }
  }
  @Get('success')
  @Render('success')
  showSuccess() {
    return { message: 'Sikeres rögzítés!' };
  }
}


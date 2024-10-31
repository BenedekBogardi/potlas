import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { VacationRequestService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [VacationRequestService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

});

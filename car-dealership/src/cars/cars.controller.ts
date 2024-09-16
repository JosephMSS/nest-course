import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  findAll() {
    return ['toyota', 'honda, jeep'];
  }
}

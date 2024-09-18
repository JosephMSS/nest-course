import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCardDTO } from './dtos/create-car.dto';
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  findAll() {
    return this.carsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOne(id);
  }
  @Post()
  create(@Body() createCarDto: CreateCardDTO) {
    return createCarDto;
  }
  @Patch(':id')
  update(
    @Body() createCarDto: CreateCardDTO,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return createCarDto;
  }
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return id;
  }
}

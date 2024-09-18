import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { UpdateCardDTO } from './dtos';
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
    return this.carsService.create(createCarDto);
  }
  @Patch(':id')
  update(
    @Body() updateCardDTO: UpdateCardDTO,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.carsService.update(id, updateCardDTO);
  }
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}

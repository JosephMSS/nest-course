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
  create(@Body() body: any) {
    return body;
  }
  @Patch(':id')
  update(@Body() body: any, @Param('id', ParseUUIDPipe) id: string) {
    return body;
  }
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return id;
  }
}

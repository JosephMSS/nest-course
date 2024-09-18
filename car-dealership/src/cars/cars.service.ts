import { Injectable, NotFoundException } from '@nestjs/common';
import { generateUuid } from 'src/common';
import { CreateCardDTO } from './dtos/create-car.dto';
import { ICar } from './interface/car.interface';

export interface ICarService {
  findAll(): ICar[];
  findOne(id: string): ICar;
  create(createCarDto: CreateCardDTO): ICar;
}
@Injectable()
export class CarsService implements ICarService {
  private cars: ICar[] = [
    {
      id: generateUuid.execute(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: generateUuid.execute(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: generateUuid.execute(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];
  findAll(): ICar[] {
    return this.cars;
  }
  findOne(id: string): ICar {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car ${id} not found`);
    return car;
  }
  create(createCarDto: CreateCardDTO): ICar {
    const newCar = {
      ...createCarDto,
      id: generateUuid.execute(),
    };
    this.cars.push(newCar);
    return newCar;
  }
}

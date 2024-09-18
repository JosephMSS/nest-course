import { Injectable, NotFoundException } from '@nestjs/common';
import { generateUuid } from 'src/common';
import { UpdateCardDTO, CreateCardDTO } from './dtos';
import { ICar } from './interface/car.interface';

export interface ICarService {
  findAll(): ICar[];
  findOne(id: string): ICar;
  create(createCarDto: CreateCardDTO): ICar;
  update(id: string, updateCarDto: UpdateCardDTO): ICar;
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
      id: '9f833418-4278-441e-9185-0c1e07870efc',
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
  update(id: string, updateCarDto: UpdateCardDTO): ICar {
    let carDB = this.findOne(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          id,
          ...carDB,
          ...updateCarDto,
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }
}

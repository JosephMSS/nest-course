import { Injectable, NotFoundException } from '@nestjs/common';
export interface ICar {
  id: number;
  brand: string;
  model: string;
}
export interface ICarService {
  findAll(): ICar[];
  findOne(id: number): ICar;
}
@Injectable()
export class CarsService implements ICarService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];
  findAll(): ICar[] {
    return this.cars;
  }
  findOne(id: number): ICar {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car ${id} not found`);
    return car;
  }
}

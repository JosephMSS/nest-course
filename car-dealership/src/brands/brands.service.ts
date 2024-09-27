import { Injectable, NotFoundException } from '@nestjs/common';
import { generateUuid } from 'src/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: generateUuid.execute(),
      name: 'Toyota',
      createdAt: new Date().getTime().toString(),
    },

    {
      id: generateUuid.execute(),
      name: 'Honda',
      createdAt: new Date().getTime().toString(),
    },
    {
      id: generateUuid.execute(),
      name: 'Ford',
      createdAt: new Date().getTime().toString(),
    },
    {
      id: generateUuid.execute(),
      name: 'BMW',
      createdAt: new Date().getTime().toString(),
    },
  ];
  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: generateUuid.execute(),
      name: createBrandDto.name,
      createdAt: new Date().getTime().toString(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const foundBrand = this.brands.find((brand) => brand.id === id);
    if (!foundBrand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }
    return foundBrand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let foundBrand = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        foundBrand.updatedAt = new Date().getTime().toString();
        foundBrand = { ...foundBrand, ...updateBrandDto };
        return foundBrand;
      }
      return brand;
    });
    return foundBrand;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateCardDTO } from './create-car.dto';
/**
 * @link https://docs.nestjs.com/techniques/validation#mapped-types
 */
export class UpdateCardDTO extends PartialType(CreateCardDTO) {}

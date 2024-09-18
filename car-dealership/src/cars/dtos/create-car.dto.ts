import { IsString } from 'class-validator';
export class CreateCardDTO {
  @IsString()
  readonly brand: string;
  @IsString()
  readonly model: string;
}

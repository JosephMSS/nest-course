import { v4 as uuid, v4 } from 'uuid';
interface IGenerateUUID {
  execute(): string;
}
export class GenerateUUID implements IGenerateUUID {
  constructor(private readonly uuid: typeof v4) {}
  execute(): string {
    return this.uuid();
  }
}
export const generateUuid = new GenerateUUID(uuid);

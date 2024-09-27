/**
 * son a representación de la bd
 */
interface IBrand {
  id: string;
  name: string;
  createdAt: string;
  updatedAt?: string;
}
export class Brand implements IBrand {
  id: string;
  name: string;
  createdAt: string;
  updatedAt?: string;
}

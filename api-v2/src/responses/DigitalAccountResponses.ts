import { JunoEntity } from '../entities/JunoEntity';

export type UpdateDigitalAccountResponse = JunoEntity;

export type GetDigitalAccountResponse = JunoEntity;

export interface CreateDigitalAccountResponse extends JunoEntity {
  resourceToken: string;
}

import { JunoEntity } from './JunoEntity';

export interface Bank extends JunoEntity {
  number?: string;
  name?: string;
}

import { JunoEntity } from './JunoEntity';

export interface Balance extends JunoEntity {
  balance: number;
  withheldBalance: number;
  transferableBalance: number;
}

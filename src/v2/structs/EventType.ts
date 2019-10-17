import { JunoEntity } from './JunoEntity';

export interface EventType extends JunoEntity {
  name: string;
  label: string;
  status: string;
}

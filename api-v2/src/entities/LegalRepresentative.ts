import { JunoEntity } from './JunoEntity';

export interface LegalRepresentative extends JunoEntity {
  birthDate: string;
  document: string;
  name: string;
}

import { Link } from './Link';

export interface JunoEntity {
  id?: string;
  _links?: Record<string, Link>[];
}

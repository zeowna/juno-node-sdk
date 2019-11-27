export class JunoError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'JunoError';
  }
}

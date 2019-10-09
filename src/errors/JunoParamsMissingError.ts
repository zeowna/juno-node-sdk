export class JunoParamsMissingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'JunoParamsMissingError';
  }
}

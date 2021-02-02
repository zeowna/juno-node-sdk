export class JunoError extends Error {
  readonly rawError: any;

  constructor(message: string, rawError?: any) {
    super(message);
    this.name = 'JunoError';
    this.rawError = rawError;
  }
}

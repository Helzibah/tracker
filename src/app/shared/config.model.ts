export class Config {
  timezone: string = '';

  public constructor(init? : Partial<Config>) {
    Object.assign(this, init);
  }
}

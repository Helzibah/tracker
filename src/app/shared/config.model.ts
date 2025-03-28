export class Config {
  public constructor(init? : Partial<Config>) {
    Object.assign(this, init);
  }
}

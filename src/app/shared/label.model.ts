export class Label {
  from: string = '';
  to: string = '';

  public constructor(init? : Partial<Label>) {
    Object.assign(this, init);
  }
}

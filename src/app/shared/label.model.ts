export class Label {
  from: string = '';
  to: string = '';
  quantity: string = '';
  description: string = '';

  public constructor(init? : Partial<Label>) {
    Object.assign(this, init);
  }
}

export class Super {

  private _id: number;
  private readonly _nom: string;
  private readonly _image: string;

  constructor(id: number, nom: string, image: string) {
    this._id = id;
    this._nom = nom;
    this._image = image;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  get image(): string {
    return this._image;
  }
}

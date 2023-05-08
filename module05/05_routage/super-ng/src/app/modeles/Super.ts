export class Super {

  private readonly _id: number;
  private readonly _nom: string;
  private readonly _image: string;

  constructor(id:number, nom: string, image: string) {
    this._id = id;
    this._nom = nom;
    this._image = image;
  }

  get id(): number {
    return this._id;
  }

  get nom(): string {
    return this._nom;
  }

  get image(): string {
    return this._image;
  }
}

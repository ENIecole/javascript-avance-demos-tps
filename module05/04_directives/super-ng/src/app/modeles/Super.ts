export class Super {
  private readonly _nom: string;
  private readonly _image: string;

  constructor(nom: string, image: string) {
    this._nom = nom;
    this._image = image;
  }

  get nom(): string {
    return this._nom;
  }

  get image(): string {
    return this._image;
  }
}

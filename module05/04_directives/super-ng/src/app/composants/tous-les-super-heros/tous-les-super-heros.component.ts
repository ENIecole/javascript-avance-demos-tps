import {Component} from '@angular/core';
import {Super} from "../../modeles/Super";

@Component({
  selector: 'app-tous-les-super-heros',
  templateUrl: './tous-les-super-heros.component.html',
  styleUrls: ['./tous-les-super-heros.component.scss']
})
export class TousLesSuperHerosComponent {

  public supers: Array<Super>;

  constructor() {
    this.supers = [];
  }

  public ajoutSupers() {
    this.supers.push(new Super('Wonder Woman', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg'));
    this.supers.push(new Super('Hulk', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg'));
    this.supers.push(new Super('Harley Quinn', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/309-harley-quinn.jpg'));
  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-tous-les-super-heros',
  templateUrl: './tous-les-super-heros.component.html',
  styleUrls: ['./tous-les-super-heros.component.scss']
})
export class TousLesSuperHerosComponent {

  public supers: Array<any>;

  constructor() {
    this.supers = [];
  }

  public ajoutSupers() {
    this.supers.push({nom: 'Wonder Woman'});
    this.supers.push({nom: 'Hulk'});
    this.supers.push({nom: 'Harley Quinn'});
  }
}

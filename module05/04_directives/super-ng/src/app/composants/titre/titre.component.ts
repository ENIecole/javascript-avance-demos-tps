import {Component} from '@angular/core';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.scss']
})
export class TitreComponent {

  public titre: string;

  constructor() {
    this.titre = 'Super NG';
  }
}

import {Component, Inject} from '@angular/core';
import {Super} from "../../modeles/Super";
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tous-les-super-heros',
  templateUrl: './tous-les-super-heros.component.html',
  styleUrls: ['./tous-les-super-heros.component.scss']
})
export class TousLesSuperHerosComponent {

  public supers$: Observable<Super[]> | undefined;

  constructor(
    @Inject(ApiService) private api: ApiService
  ) {
    this.supers$ = this.api.recupererLesSuperHeros();
  }
}

import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {Super} from "../../modeles/Super";
import {Observable} from "rxjs";

@Component({
  selector: 'app-un-seul-super-hero',
  templateUrl: './un-seul-super-hero.component.html',
  styleUrls: ['./un-seul-super-hero.component.scss']
})
export class UnSeulSuperHeroComponent {

  public id!: string | null;
  public un_super$: Observable<Super> | undefined;

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(ApiService) private api: ApiService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.un_super$ = this.api.recupereUnSeulSuperHero(+this.id);
    }
  }

}

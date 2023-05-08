import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-un-seul-super-hero',
  templateUrl: './un-seul-super-hero.component.html',
  styleUrls: ['./un-seul-super-hero.component.scss']
})
export class UnSeulSuperHeroComponent {

  public id!: string | null;

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}

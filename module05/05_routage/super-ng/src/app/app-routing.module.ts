import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TousLesSuperHerosComponent} from "./composants/tous-les-super-heros/tous-les-super-heros.component";
import {UnSeulSuperHeroComponent} from "./composants/un-seul-super-hero/un-seul-super-hero.component";

const routes: Routes = [
  { path: '', component: TousLesSuperHerosComponent },
  { path: 'tous-les-super-heros', component: TousLesSuperHerosComponent },
  { path: 'un-seul-super-hero/:id', component: UnSeulSuperHeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './komponente/home/home.component';
import { NarociloComponent } from './komponente/narocilo/narocilo.component';
import { NarocnikComponent } from './komponente/narocnik/narocnik.component';
import { UspeloComponent } from './komponente/uspelo/uspelo.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "narocilo", component: NarociloComponent},
  {path: "next", component: NarocnikComponent},
  {path: "uspelo", component: UspeloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

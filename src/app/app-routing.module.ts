import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { SearchResultComponent } from './components/search/search-result.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'buscar', component: SearchComponent},
  {path: 'acercade', component: AboutComponent},
  {path: 'detalle/:id', component: SearchResultComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/city/San Jose', pathMatch: 'full' },
  { path: 'city/:city', component: WeatherComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

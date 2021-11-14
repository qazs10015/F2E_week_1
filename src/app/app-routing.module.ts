import { TravelEventComponent } from './pages/travel-event/travel-event.component';
import { TravelFoodComponent } from './pages/travel-food/travel-food.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TravelComponent } from './pages/travel/travel.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'food', component: TravelFoodComponent },
  { path: 'event', component: TravelEventComponent },
  { path: '*', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

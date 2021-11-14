import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { SideComponent } from './layout/side/side.component';
import { TravelComponent } from './pages/travel/travel.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterBlockComponent } from './components/filter-block/filter-block.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth.interceptor';
import { DetailInfoComponent } from './components/dialogs/detail-info/detail-info.component';

import { TravelEventComponent } from './pages/travel-event/travel-event.component';
import { TravelFoodComponent } from './pages/travel-food/travel-food.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideComponent,
    TravelComponent,
    SearchBarComponent,
    FilterBlockComponent,
    HomeComponent,
    DetailInfoComponent,
    TravelEventComponent,
    TravelFoodComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }

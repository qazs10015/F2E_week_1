import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCityPipe } from '../pipes/filter-city.pipe';
import { SwiperModule } from "swiper/angular";
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
const materialModules = [MatDialogModule]
const thirdModules = [SwiperModule, NgxPaginationModule]

@NgModule({
  declarations: [
    FilterCityPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...thirdModules,
    ...materialModules

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FilterCityPipe,
    ...thirdModules,
    ...materialModules

  ]
})
export class SharedModule { }

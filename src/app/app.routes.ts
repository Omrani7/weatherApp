import { Routes } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

export const routes: Routes = [
  {path:'search-form',component:SearchFormComponent},
  {path:'weather-details',component:WeatherDetailsComponent}
];

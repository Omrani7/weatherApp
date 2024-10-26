
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent implements OnInit {


weatherData: WeatherData| undefined;
constructor(private http: HttpClient,private weatherService : WeatherService) {}
credentials = new FormGroup({
  latitude: new FormControl('36.82135'),
  longitude: new FormControl('10.027027')
});


 /* async ngOnInit(): Promise<void> {
const latitude =Number( this.credentials.value.latitude!);
const longitude = Number(this.credentials.value.longitude!);
    try {
      this.weatherData = await this.weatherService.fetchWeatherData(latitude,longitude);
      console.log('Weather Data:', this.weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
    }
*/
ngOnInit(): void {

}
getWeatherDetails(): void {
  const latitude =Number( this.credentials.value.latitude!);
const longitude = Number(this.credentials.value.longitude!);
  this.weatherService.fetchWeatherData(latitude, longitude)
    .then(data => {
      this.weatherData = data;
      console.log('Weather Data:', this.weatherData);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}
credentialsInput: string = '';
knowsCrendientals:boolean = true;


}




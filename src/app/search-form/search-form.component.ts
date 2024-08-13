
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
;

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent implements OnInit {

latitude:string = '36.82135';
longitude:string = '10.027027';
weatherData: any;
constructor(private http: HttpClient) {}




  ngOnInit(): void {
    this.fetchWeatherData();
  }

  fetchWeatherData(): void {
    const params = new HttpParams()
      .set('latitude', this.latitude.toString())
      .set('longitude', this.longitude.toString())
      .set('hourly', 'temperature_2m');

    const apiUrl = 'https://api.open-meteo.com/v1/forecast';

    this.http.get(apiUrl, { params }).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.processWeatherData(response);
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
      },
      complete: () => {
        console.log('Weather data fetching completed.');
      }

    } );
    console.log('API URL:', apiUrl);
console.log('API Params:', params);


  }

  processWeatherData(data: any): void {
    console.log("Received data:", data);

    // Use optional chaining to safely access properties
    const hourlyData = data?.hourly;
    if (hourlyData && hourlyData.time && hourlyData.temperature_2m) {
        this.weatherData = data;
        console.log("Valid weather data:", this.weatherData);
    } else {
        console.error("Invalid or incomplete API response:", data);
        this.weatherData = null;
    }
}

}




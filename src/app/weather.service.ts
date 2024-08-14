import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeatherData } from './weather-data'; // Adjust the path as needed
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  async fetchWeatherData(latitude: number, longitude: number): Promise<WeatherData> {
    const params = new HttpParams()
      .set('latitude', latitude.toString())
      .set('longitude', longitude.toString())
      .set('hourly', 'temperature_2m,rain,visibility,wind_speed_10m')
      .set('daily','sunrise')
      .set('timezone','Africa/Cairo')

    const apiUrl = 'https://api.open-meteo.com/v1/forecast';

    try {

      const response = await firstValueFrom(this.http.get<WeatherData>(apiUrl, { params }));
      return response;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }
}

export interface WeatherData {
latitude : number;
longitude : number;
hourly : {
  time : string[];
  temperature_2m : number[];
  rain : number[];
  visibility: number[];
  wind_speed_10m:number[];

};

daily:{
  sunrise:string[];

}
timezone: string;
}

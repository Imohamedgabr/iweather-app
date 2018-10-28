import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apiKey: string = 'fd411d936ec2dfa43b3f4e2fd26c4f96';
  city:string = '';
  url:string = '';


  
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');

  }

  getWeather(city : string) : any {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=fd411d936ec2dfa43b3f4e2fd26c4f96')
    .map(res => res);
   }

}

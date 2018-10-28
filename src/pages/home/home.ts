import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;
  location: {
    city:string
  }  

  src:string;

  constructor(
    public navCtrl: NavController ,
    private weatherProvider : WeatherProvider,
    private storage : Storage
    ) {

    // save it in the ionic stroage

  }

  ionViewWillEnter(){
    // its a syncrhonous as it returns a promise

    this.storage.get('location').then((val) => {
      if(val != null ){
        
      }else{

      }
    });

    this.location = {
      city:'Miami'
    }
    this.weatherProvider.getWeather(this.location.city)
      .subscribe(weather => {
        this.weather = weather;
        this.src = 'img/' + weather.weather[0].icon + '.png';
        console.log(this.weather);
      });
  }

}

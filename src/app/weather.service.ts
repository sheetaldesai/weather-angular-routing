import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';
import { Weather } from './weather';

@Injectable()
export class WeatherService {

  // weather: BehaviorSubject<any> = new BehaviorSubject(new Weather());
  constructor(private _http: HttpClient) { }

  // getWeather(city: string) {
  //   const appID = 'cbf4e7231329dd382fab194a29c95401';
  //   const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + appID;
  //   console.log(url);
  //   this._http.get(url).toPromise()
  //   .then(res=>
  //     this.weather.next(new Weather(res["main"]["humidity"],
  //                                   res["main"]["temp"],
  //                                   res["main"]["temp_min"],
  //                                   res["main"]["temp_high"],
  //                                   res["weather"]["description"])))
  //   .catch(reason =>
  //     {
  //       console.log(reason);
  //     });
  // }

  getWeather(city: string): Observable<Weather> {
    const appID = 'cbf4e7231329dd382fab194a29c95401';
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + appID;
    console.log(url);

    return this._http.get(url) 
        .map(res => {
            return new Weather(res["main"]["humidity"],
                               res["main"]["temp"],
                               res["main"]["temp_min"],
                               res["main"]["temp_high"],
                               res["weather"]["description"]);
          });
  }
}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})



export class WeatherComponent implements OnInit {
  weather : Weather = new Weather();
  city : string = "";
  imageURL = "";

  images = {
    'Seattle':'https://images.pexels.com/photos/37350/space-needle-seattle-washington-cityscape.jpg?h=350&auto=compress&cs=tinysrgb',
    'San Jose': 'https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?h=350&auto=compress&cs=tinysrgb',
    'Burbank':'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1511403226000/photosp/ig-452971845153882111_30887462/stock-photo-city-walking-california-downtown-sunny-instagood-jj-jjforum-instahub-ig-452971845153882111_30887462.jpg',
    'Dallas':'https://images.pexels.com/photos/45182/dallas-texas-skyline-dusk-45182.jpeg?h=350&auto=compress&cs=tinysrgb',
    'Washington DC':'https://images.pexels.com/photos/261093/pexels-photo-261093.jpeg?h=350&auto=compress&cs=tinysrgb',
    'Chicago':'https://images.pexels.com/photos/161963/chicago-illinois-skyline-skyscrapers-161963.jpeg?h=350&auto=compress&cs=tinysrgb'
  }

  constructor(private _weatherService : WeatherService, private _route : ActivatedRoute) {

    // this._weatherService.weather.subscribe((weather) => {
    //   this.weather = weather;
    //   console.log("Weather: ", weather);
    // })
    this._route.paramMap.subscribe( params => {
      this.city = params.get('city');
      this.imageURL = this.images[this.city];
      console.log("image: ", this.imageURL);
      console.log("city:", this.city);
      this._weatherService.getWeather(this.city).subscribe(weather => {
        this.weather = weather;
        console.log("component weather: ", this.weather);
      })
    });

   
  }

  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { WeatherService } from '../../../services/weather.service';
import { Forecast } from '../../models/forecast.model';


@Component({
    selector: 'weather',
    templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
    public forecasts: Forecast;

    constructor(private service : WeatherService) {
       
      
    }

    ngOnInit(): void{
        this.getWeatherReport('Swindon');

    }

    getWeatherReport(city : string){

        this.service.getWeatherReport(city).subscribe(result => {
            this.forecasts = result.json() as Forecast;
        });
    }
}

 
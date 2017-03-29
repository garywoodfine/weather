import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import {IWeatherService } from './weatherservice.interface';


@Injectable()
export class WeatherService implements IWeatherService{

    constructor(public http : Http){

    }

    getWeatherReport(city : string): Observable<Response>{
         
         var url :string = '/api/Weather/WeatherForecast/{city}';

        return this.http.get(url);
    }

}
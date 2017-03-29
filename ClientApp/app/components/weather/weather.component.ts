import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html'
})
export class WeatherComponent {
    public forecasts: Forecast[];

    constructor(http: Http) {
        http.get('/api/Weather/WeatherForecast/swindon').toPromise().then(result => {
            this.forecasts = result.json() as Forecast[];
        });
    }
}

interface Forecast {h
    
    temp: string;
    summary: string;
    city: string;
}
 
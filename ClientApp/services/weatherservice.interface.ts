
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

export interface IWeatherService {

    getWeatherReport(city : string): Observable<Response>;
}
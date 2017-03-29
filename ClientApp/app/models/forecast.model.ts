
export class Forecast {
     temp: string;
    summary: string;
    city: string;

    constructor(data) { <any>Object.assign(this,data);}
}
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService{

    constructor(private http: Http){ }

    getFilms(){
        return this.http.get('films.json')
    }
}

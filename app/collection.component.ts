import { Component} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';

@Component({
    selector: 'collection-app',
    templateUrl: 'app/collection.component.html',
    styleUrls : ['app/collection.component.css'],
    providers:    [ HttpService ]
})
export class CollectionComponent {

    films: string[]=[];

    addFilm: boolean = false;
    settingFilm: boolean = false;
    editForm: Array<any> = [];
    itemCopy: Array<any> = [];
    settingFilmIndex: number;
    newName: string;
    newImg: string;
    newData: number;
    newRating: number;
    newGenre: string;

    constructor(private httpService: HttpService){}

    ngOnInit(){
        this.httpService.getFilms().subscribe((films: Response) => this.films=films.json() );
    }

    settingsFilmForm(item, index) {
        this.settingFilm = true;
        this.addFilm = false;
        this.itemCopy = item;
        this.editForm = Object.assign({}, item);
        this.settingFilmIndex = index;
    }
    addNewFilm(title:string, image:string, releaseYear:number, rating:number, newGenre:string) {
        let genre:string[] = [];
        genre.push(newGenre);

        // this.films.push( { title, image, releaseYear, rating, genre } );
        // console.log(this.films);

        setTimeout(() => {
            this.addFilm = false;
            this.newName = '';
            this.newImg = '';
            this.newData = null;
            this.newRating = null;
            this.newGenre = '';
        }, 300);
    }
    chengeFilm() {
        for(let key in this.itemCopy) {
            this.itemCopy[key] = this.editForm[key];
        }
        setTimeout(() => {
            this.settingFilm = false;
        }, 300);
    }
    deleteFilm() {
        this.films.splice( this.settingFilmIndex, 1);
        setTimeout(() => {
            this.settingFilm = false;
        }, 300);
    }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_service_1 = require('./http.service');
var CollectionComponent = (function () {
    function CollectionComponent(httpService) {
        this.httpService = httpService;
        this.films = [];
        this.addFilm = false;
        this.settingFilm = false;
        this.editForm = [];
        this.itemCopy = [];
        this.sortParam = 'title';
    }
    CollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getFilms().subscribe(function (films) { return _this.films = films.json(); });
    };
    CollectionComponent.prototype.settingsFilmForm = function (item, index) {
        this.settingFilm = true;
        this.addFilm = false;
        this.itemCopy = item;
        this.editForm = Object.assign({}, item);
        this.settingFilmIndex = index;
    };
    CollectionComponent.prototype.addNewFilm = function (title, image, releaseYear, rating, newGenre) {
        var _this = this;
        var genre = [];
        genre.push(newGenre);
        // this.films.push( { title, image, releaseYear, rating, genre } );
        // console.log(this.films);
        setTimeout(function () {
            _this.addFilm = false;
            _this.newName = '';
            _this.newImg = '';
            _this.newData = null;
            _this.newRating = null;
            _this.newGenre = '';
        }, 300);
    };
    CollectionComponent.prototype.chengeFilm = function () {
        var _this = this;
        for (var key in this.itemCopy) {
            this.itemCopy[key] = this.editForm[key];
        }
        setTimeout(function () {
            _this.settingFilm = false;
        }, 300);
    };
    CollectionComponent.prototype.deleteFilm = function () {
        var _this = this;
        this.films.splice(this.settingFilmIndex, 1);
        setTimeout(function () {
            _this.settingFilm = false;
        }, 300);
    };
    CollectionComponent = __decorate([
        core_1.Component({
            selector: 'collection-app',
            templateUrl: 'app/collection.component.html',
            styleUrls: ['app/collection.component.css'],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], CollectionComponent);
    return CollectionComponent;
}());
exports.CollectionComponent = CollectionComponent;
//# sourceMappingURL=collection.component.js.map
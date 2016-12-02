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
var SearchFilter = (function () {
    function SearchFilter() {
    }
    SearchFilter.prototype.transform = function (array, sortParam) {
        if (array) {
            // array = array.reverse();
            array.sort(function (a, b) {
                if (a[sortParam] < b[sortParam]) {
                    return -1;
                }
                else if (a[sortParam] > b[sortParam]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return array;
    };
    SearchFilter = __decorate([
        core_1.Pipe({
            name: 'searchFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchFilter);
    return SearchFilter;
}());
exports.SearchFilter = SearchFilter;
//# sourceMappingURL=search-filter.pipe.js.map
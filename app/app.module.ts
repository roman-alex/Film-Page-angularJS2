import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';


import { SearchFilter }   from './search-filter.pipe';
import { AppComponent }   from './app.component';
import { CollectionComponent }   from './collection.component';
import { ItemComponent }   from './item.component';



const appRoutes: Routes =[
    { path: '', component: CollectionComponent},
    { path: 'item', component: ItemComponent},
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, ItemComponent, CollectionComponent, SearchFilter],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

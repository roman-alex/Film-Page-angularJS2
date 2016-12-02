import { Component, OnDestroy} from '@angular/core';
import { Response} from '@angular/http';
import { ActivatedRoute} from '@angular/router';
import { Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'iten-app',
    templateUrl: 'app/item.component.html'
})
export class ItemComponent implements OnDestroy {

    private title: string;
    private item = {};
    private genre: string[] = [];
    private querySubscription: Subscription;

    constructor(private route: ActivatedRoute){

        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                for(let key in queryParam) {
                    this.item[key] = queryParam[key];
                }
                this.genre = queryParam.genre.split(',');
            }
        );
    }
    ngOnDestroy(){
        this.querySubscription.unsubscribe();
    }
}

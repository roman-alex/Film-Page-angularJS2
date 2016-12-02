import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter'
})
export class SearchFilter implements PipeTransform {
    transform(array, sortParam) {
        if(array){
            // array = array.reverse();
            array.sort((a: any, b: any) => {
                if (a[sortParam] < b[sortParam]) {
                    return -1;
                } else if (a[sortParam] > b[sortParam]) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
      return array;
    }
}

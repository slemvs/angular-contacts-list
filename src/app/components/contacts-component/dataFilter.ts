import {Pipe, PipeTransform} from "@angular/core";
import {Contact} from "app/models/Contact";

@Pipe({
  name: 'getFilteredData',
  pure: false
})

export class GetFilteredDataPipe implements PipeTransform {
  constructor(){
    //this.test = 'Test';
  }
  transform(data:Array<Contact>, filter: string) : any {
    return filter === '' 
      ? data
      : data.filter((item) => (item.lastname +' '+ item.name).includes(filter));
  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value *value;
  }

}


@Pipe({
  name: 'concat'
})
export class concatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args + ". " +value.toUpperCase();
  }

}



@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchName: string,filterName:string): any {
   console.log(value,searchName,filterName)
   if(searchName.length >0){
   let filterData=value.filter((item:any)=>{
    console.log(item[filterName].includes(searchName))
      return item[filterName].toLowerCase().includes(searchName.toLowerCase());
   })

   console.log(filterData)

   return filterData;
  }
  else{
    return value;
  }

    // return args + ". " +value.toUpperCase();
  }

}

  import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allemployee: any, searchKey: string): any[] {
    //First argument(allemployee)-the item which has to be transformed
    //Second argument(searchKey(searchKey) -based on which the transformation has to be done
    const result: any = []
    if (!allemployee || searchKey == "") {
      return allemployee
    }


    allemployee.forEach((item: any) => {
      if (item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())) {

        result.push(item)
      }


    })
    return result
  }



}
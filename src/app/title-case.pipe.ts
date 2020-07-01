import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!value) return null;
    
    let arr = value.split(' ');
  
    for(let i= 0; i< arr.length; i++){
      let word = arr[i];
      if(i> 0 && this.isPreposition(word))
        arr[i] = word.toLowerCase();
      else
        arr[i] = this.titleCase(word);
    }
    return arr.join(' ');
  }

  private isPreposition(word){
    let prepositions = ['of', 'the'];
    if(prepositions.includes(word.toLowerCase())){
      return true;
    }
    return false
  }

  private titleCase(word){
    return  word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }

}

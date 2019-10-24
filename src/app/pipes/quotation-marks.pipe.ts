import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'quotationMarks'
})
export class QuotationMarksPipe implements PipeTransform {

  transform(value: string): string {
    if (!!value) {
      return value.replace(/&quot;/g, '"');
    }
    return null;
  }

}

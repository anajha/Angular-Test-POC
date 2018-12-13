import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringAppender'
})
export class StringAppenderPipe implements PipeTransform {

  transform(value: string): string {
    let filepathPrefix="https://s3.amazonaws.com/analyticalworkbench-data/";
    return filepathPrefix.concat(value);
  }
}


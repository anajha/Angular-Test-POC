import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFormatter'
})
export class StringFormatterPipe implements PipeTransform {

  transform(value: string): string {
    //console.log(value);
    let filepath=value;
    let formattedFilePath=filepath.split('/');
    let fileName=formattedFilePath.pop();
    return fileName;
  }
}

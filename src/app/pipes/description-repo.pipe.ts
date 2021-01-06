import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionRepo',
})
export class DescriptionRepoPipe implements PipeTransform {
  /**
   * Returns string converted
   * @param value 
   * @returns {string}
   */
  transform(value: string): string {
    if (value == null) {
      return `There is not description for this repository`;
    }
    return value;
  }
}

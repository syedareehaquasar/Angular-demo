import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {
  codes: any;
  constructor() {
    this.codes = {'India': '91', 'USA': '1', 'Pakistan': '92', 'China': '86', 'Africa': '27'};
  }
  transform(value: any, country: string): string {
    return "+" + this.codes[country] + "-" + value;
  }

}

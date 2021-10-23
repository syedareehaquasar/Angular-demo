import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expr'
})
export class ExprPipe implements PipeTransform {
  currentYear: any;
  joinYear: any;
  experience: any;

  transform(value: any): unknown {
    this.currentYear = new Date().getFullYear();
    this.joinYear = new Date(value).getFullYear();
    this.experience = this.currentYear - this.joinYear;
    return this.experience;
  }

}

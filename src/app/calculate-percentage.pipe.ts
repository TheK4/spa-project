import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatePercentage'
})
export class CalculatePercentagePipe implements PipeTransform {
  transform(progress: number, duration: number): number {
    return Math.floor((progress / duration) * 100);
  }
}

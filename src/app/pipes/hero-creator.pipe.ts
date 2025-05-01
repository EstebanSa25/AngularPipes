import { Pipe, type PipeTransform } from '@angular/core';

type creator = 'DC' | 'Marvel';
@Pipe({
  name: 'heroCreator',
})
export class HeroCreatorPipe implements PipeTransform {
  transform(value: number): creator {
    return value === 0 ? 'DC' : 'Marvel';
  }
}

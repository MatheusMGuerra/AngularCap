import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicador'
})
export class MultiplicadorPipe implements PipeTransform {

  transform(value: number, multiplicador: number): unknown {
    return value * multiplicador;
  }

}
